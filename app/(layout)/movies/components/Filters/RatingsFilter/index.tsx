import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Group, NumberInput } from '@mantine/core';
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

  const setRatingsParam = (value: string, name: string) => {
    if (!(errorMin || errorMax)) {
      const queryString = createQueryString(searchParams, value, name);
      push(`${Path.Movies}?${queryString}`);
    }
  };

  const validateMin = (value: string) => {
    if (value !== '' && maxVote !== '' && value > maxVote) {
      setErrorMin(ErrorMessage.RatingMin);
    } else {
      setErrorMin(null);
    }
    validateInputs(value, maxVote);
  };

  const validateMax = (value: string) => {
    if (value !== '' && minVote !== '' && value < minVote) {
      setErrorMax(ErrorMessage.RatingMax);
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
    <Group display="inline-flex" align="flex-start" gap="0.5rem" wrap="nowrap">
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
          setMinVote(value.toString());
          validateMin(value.toString());
        }}
        onBlur={(event) => {
          const value = event.currentTarget.value;
          setRatingsParam(value, SearchParam.MinVote);
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
          setMaxVote(value.toString());
          validateMax(value.toString());
        }}
        onBlur={(event) => {
          const value = event.currentTarget.value;
          setRatingsParam(value, SearchParam.MaxVote);
        }}
      />
    </Group>
  );
}
