import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { removeEmptyValuesFromList } from '@/lib/utils';
import { useMoviePerson } from '@/hooks/use-movies';

function MoviePersonSelect({ form, hasEdit }: { form: any; hasEdit?: any }) {
  const moviePerson = useMoviePerson({ enabled: true });
  const moviePersonData = moviePerson.data?.data;
  const [castOpts, setCastOpts] = React.useState(moviePersonData);
  const [selectedCast, setSelectedCast] = React.useState([]);

  const handleChange = (value: any, field: any) => {
    const hasItem = selectedCast?.find((m) => m?.id === v);
    if (!hasItem) {
      setSelectedCast((prev) => {
        return [...selectedCast, moviePersonData?.find((m) => m?.id === v)];
      });
      setCastOpts(castOpts?.filter((m) => m?.id !== v));
    } else {
      setSelectedCast(selectedCast?.filter((m) => m?.id !== v));
      setCastOpts([...castOpts, moviePersonData?.find((m) => m?.id === v)]);
    }
  };

  const handleRemove = (id: number) => {
    setSelectedCast(selectedCast?.filter((m) => m?.id !== item.id));
    setCastOpts([...castOpts, moviePersonData?.find((m) => m?.id === item.id)]);
  };

  React.useEffect(() => {
    if (!castOpts?.length && moviePersonData?.length) {
      setCastOpts(moviePersonData);
    }
  }, [castOpts, moviePersonData]);

  React.useEffect(() => {
    if (selectedCast?.length) {
      form.setValue('cast', {
        connect: removeEmptyValuesFromList(selectedCast)
          ?.map((item) => item.id)
          ?.map((id) => ({ id }))
      });
    }
  }, [castOpts, form, selectedCast, hasEdit]);

  React.useEffect(() => {
    if (hasEdit?.cast?.length && castOpts?.length) {
      castOpts?.map((item) => {
        hasEdit?.cast?.map((cast) => {
          if (item.id === cast.id) {
            setSelectedCast((prev) => [...prev, item]);
          }
        });
      });
    }
  }, [castOpts, hasEdit]);

  const renderDirectorOpts = castOpts
    ?.filter((person: any) => person.type === 'DIRECTOR')
    .map((person: any) => (
      <SelectItem key={person.id} value={person.id}>
        {person.id} - {person?.full_name}
      </SelectItem>
    ));

  const renderActorsOpts = castOpts
    ?.filter((person: any) => person.type === 'ACTOR')
    .map((person: any) => (
      <SelectItem key={person?.id} value={person?.id}>
        {person.id} - {person?.full_name}
      </SelectItem>
    ));

  return (
    <div className='flex flex-col space-y-4'>
      <Select>
        <FormField
          control={form.control}
          name='cast'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>Elenco</FormLabel>
              <Select
                onValueChange={(v) => handleChange(v, field)}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione as pessoas para o elenco' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className='font-bold'>Diretor</SelectLabel>
                    {renderDirectorOpts}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel className='font-bold'>Ator</SelectLabel>
                    {renderActorsOpts}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </Select>
      {selectedCast?.length ? (
        <div className='badges gap-4 flex flex-wrap'>
          {removeEmptyValuesFromList(selectedCast)?.map((item) => (
            <span
              key={item.id}
              className='inline-flex font-bold items-center gap-x-0.5 rounded-md bg-gray-100 px-4 py-2 text-sm text-gray-600'
            >
              {item.full_name}
              <button
                onClick={() => {
                  handleRemove(item.id);
                }}
                type='button'
                className='group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20'
              >
                <span className='sr-only'>Remove</span>
                <svg
                  viewBox='0 0 14 14'
                  className='h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75'
                >
                  <path d='M4 4l6 6m0-6l-6 6' />
                </svg>
                <span className='absolute -inset-1' />
              </button>
            </span>
          ))}
        </div>
      ) : undefined}
    </div>
  );
}

export default MoviePersonSelect;
