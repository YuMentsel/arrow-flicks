import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Group, NumberInput } from '@mantine/core';
import { createQueryString } from '@/app/lib/createQueryString';
import { ErrorMessages, Paths, SearchParams } from '@/app/types/enums';
import classes from './styles.module.css';

export default function RatingsFilter() {
  const searchParams = useSearchParams();
  const { push } = useRouter();

  const [minVote, setMinVote] = useState<string>(searchParams.get(SearchParams.MinVote) ?? '');
  const [maxVote, setMaxVote] = useState<string>(searchParams.get(SearchParams.MaxVote) ?? '');
  const [errorMin, setErrorMin] = useState<string | null>(null);
  const [errorMax, setErrorMax] = useState<string | null>(null);

  const setRatingsParam = (value: string, name: string) => {
    if (!(errorMin || errorMax)) {
      const queryString = createQueryString(searchParams, value, name);
      push(`${Paths.Movies}?${queryString}`);
    }
  };

  const validateMin = (value: string) => {
    if (value !== '' && maxVote !== '' && value > maxVote) {
      setErrorMin(ErrorMessages.RatingMin);
    } else {
      setErrorMin(null);
    }
    validateInputs(value, maxVote);
  };

  const validateMax = (value: string) => {
    if (value !== '' && minVote !== '' && value < minVote) {
      setErrorMax(ErrorMessages.RatingMax);
    } else {
      setErrorMax(null);
    }
    validateInputs(minVote, value);
  };

  const validateInputs = (min: string, max: string) => {
    if (max === '' || min === '' || max >= min) {
      setErrorMax(null);
      setErrorMin(null);
    }
  };

  return (
    <Group align="start" grow display="inline-flex">
      <NumberInput
        label="Ratings"
        placeholder="From"
        name={SearchParams.MinVote}
        defaultValue={minVote}
        startValue={+minVote + 1}
        min={0}
        max={10}
        classNames={classes}
        clampBehavior="strict"
        allowDecimal={false}
        allowNegative={false}
        maw="8.62rem"
        error={errorMin}
        onChange={(value) => {
          setMinVote(value.toString());
          validateMin(value.toString());
        }}
        onBlur={(event) => {
          const value = event.currentTarget.value;
          setRatingsParam(value, SearchParams.MinVote);
        }}
      />
      <NumberInput
        label=" "
        placeholder="To"
        name={SearchParams.MaxVote}
        defaultValue={maxVote}
        startValue={+maxVote + 1}
        min={0}
        max={10}
        classNames={classes}
        clampBehavior="strict"
        allowDecimal={false}
        allowNegative={false}
        maw="8.62rem"
        error={errorMax}
        onChange={(value) => {
          setMaxVote(value.toString());
          validateMax(value.toString());
        }}
        onBlur={(event) => {
          const value = event.currentTarget.value;
          setRatingsParam(value, SearchParams.MaxVote);
        }}
      />
    </Group>
  );
}
