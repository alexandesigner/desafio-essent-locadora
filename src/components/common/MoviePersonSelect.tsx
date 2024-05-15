import React, { useEffect, useCallback, useState } from 'react';
import { Check } from 'lucide-react';
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
import { removeDuplicates, removeEmptyValuesFromList } from '@/lib/utils';
import { useMoviePerson } from '@/hooks/use-movies';
import { MovieResponseData } from '@/types';

export type SelectedCastType = MovieResponseData[] | [];

function MoviePersonSelect({ form, hasEdit }: { form: any; hasEdit?: any }) {
  const moviePerson = useMoviePerson({ enabled: true });
  const moviePersonData = moviePerson?.data?.data;
  const [castOpts, setCastOpts] = useState(moviePersonData);
  const [selectedCast, setSelectedCast] = useState<SelectedCastType>([]);

  const handleChange = (value: number) => {
    const cast = moviePersonData?.find(
      (movie: MovieResponseData) => movie?.id === value
    );
    const hasItem = selectedCast?.find(
      (movie: MovieResponseData) => movie?.id === value
    );

    if (cast?.id && !hasItem) {
      setSelectedCast([...selectedCast, cast]);
      const removedItem = castOpts?.filter(
        (movie: MovieResponseData) => movie?.id !== value
      );
    }

    if (hasItem) {
      setSelectedCast(
        selectedCast?.filter((movie: MovieResponseData) => movie?.id !== value)
      );
    }
  };

  const handleRemove = (id: number) => {
    setSelectedCast(
      selectedCast?.filter((movie: MovieResponseData) => movie?.id !== id)
    );
  };

  useEffect(() => {
    if (!castOpts?.length && moviePersonData?.length) {
      setCastOpts(moviePersonData);
    }
  }, [castOpts, moviePersonData]);

  useEffect(() => {
    if (selectedCast?.length) {
      form.setValue('cast', {
        connect: removeEmptyValuesFromList(selectedCast)
          ?.map((item) => item.id)
          ?.map((id) => ({ id }))
      });
    }
  }, [castOpts, form, selectedCast, hasEdit]);

  const handleSelectedId = useCallback((id, cast) => {
    setSelectedCast((prev: MovieResponseData) => {
      if (!prev.find((item: MovieResponseData) => item.id === id)) {
        return [...prev, cast?.find((el: MovieResponseData) => el.id === id)];
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (hasEdit?.cast?.length && castOpts?.length) {
      hasEdit.cast.forEach((item) => {
        handleSelectedId(item.id, castOpts);
      });
    }
  }, [castOpts, handleSelectedId, hasEdit]);

  const renderPersonOpts = (type: string, castOpts: SelectedCastType) => castOpts?.length ?
    removeDuplicates(
      castOpts
        ?.filter((person: MovieResponseData) => person.type === type)
        .map((person: MovieResponseData) => (
          <SelectItem key={person.id} value={person.id} className="flex flex-row items-center">
            <div className="flex flex-row items-center gap-2">
              {selectedCast?.find((item) => item?.id === person?.id) ? (
                <Check size="12px" />
              ) : undefined}
              {person.id} - {person?.full_name}
            </div>
          </SelectItem>
        ))
    ) : undefined;

  const renderDirectorOpts = renderPersonOpts('DIRECTOR', castOpts);
  const renderActorsOpts = renderPersonOpts('ACTOR', castOpts);

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
                onValueChange={(v) => handleChange(v)}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Selecione as pessoas para o elenco' />
                  </SelectTrigger>
                </FormControl>
                {castOpts?.length ? (
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
                ) : undefined}
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
