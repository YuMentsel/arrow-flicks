import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Group, NumberInput } from '@mantine/core';
import { useDebouncedCallback } from '@mantine/hooks';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import { ErrorMessage, Path, SearchParam } from '@/app/types/enums';
import classes from './styles.module.css';

export default function RatingsFilter() {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const [minVote, setMinVote] = useState<string>(searchParams.get(SearchParam.MinVote) ?? '');
  const [maxVote, setMaxVote] = useState<string>(searchParams.get(SearchParam.MaxVote) ?? '');
  const [errorMin, setErrorMin] = useState<string | null>(null);
  const [errorMax, setErrorMax] = useState<string | null>(null);

  useEffect(() => {
    revalidateInputs(minVote, maxVote);
  }, [minVote, maxVote]);

  const setRatingsParam = useDebouncedCallback((value: string, name: string) => {
    if (!(errorMin || errorMax)) {
      const queryString = createQueryString(searchParams, value, name);
      push(`${Path.Movies}?${queryString}`);
    }
  }, 800);

  const validateMin = (value: string) => {
    setMinVote(() => value);
    if (value !== '' && maxVote !== '' && +value > +maxVote) {
      setErrorMin(ErrorMessage.RatingMin);
    } else {
      setErrorMin(null);
    }
  };

  const validateMax = (value: string) => {
    setMaxVote(() => value);
    if (value !== '' && minVote !== '' && +value < +minVote) {
      setErrorMax(ErrorMessage.RatingMax);
    } else {
      setErrorMax(null);
    }
  };

  const revalidateInputs = (min: string, max: string) => {
    if (max === '' || min === '' || +max >= +min) {
      setErrorMax(null);
      setErrorMin(null);
    }
  };

  return (
    <Group
      display={{ base: 'flex', sm: 'inline-flex' }}
      align="flex-start"
      gap="0.5rem"
      wrap="nowrap"
      grow
    >
      <NumberInput
        label="Ratings"
        placeholder="From"
        name={SearchParam.MinVote}
        defaultValue={minVote}
        startValue={+minVote}
        min={0}
        max={10}
        classNames={classes}
        clampBehavior="strict"
        allowDecimal={false}
        allowNegative={false}
        error={errorMin}
        onChange={(value) => {
          validateMin(value.toString());
          setRatingsParam(value.toString(), SearchParam.MinVote);
        }}
      />
      <NumberInput
        label=" "
        placeholder="To"
        name={SearchParam.MaxVote}
        defaultValue={maxVote}
        startValue={+maxVote}
        min={0}
        max={10}
        classNames={classes}
        clampBehavior="strict"
        allowDecimal={false}
        allowNegative={false}
        error={errorMax}
        onChange={(value) => {
          validateMax(value.toString());
          setRatingsParam(value.toString(), SearchParam.MaxVote);
        }}
      />
    </Group>
  );
}
