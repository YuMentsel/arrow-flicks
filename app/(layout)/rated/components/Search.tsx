import { Box, Button, TextInput, rem, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@/app/lib/utils/createQueryString';
import { Path, SearchParam } from '@/app/types/enums';
import { IconSearch } from '@tabler/icons-react';

interface SearchForm {
  search: string;
}

export function Search() {
  const theme = useMantineTheme();

  const { push } = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<SearchForm>({
    mode: 'uncontrolled',
    initialValues: { search: searchParams.get('search') ?? '' },
  });

  return (
    <Box miw={{ base: '100%', md: '50%' }}>
      <form
        onSubmit={form.onSubmit(({ search }) => {
          const queryString = createQueryString(searchParams, search, SearchParam.Search);
          push(`${Path.Rated}?${queryString}`);
        })}
      >
        <TextInput
          placeholder="Search movie title"
          size="md"
          leftSection={
            <IconSearch style={{ width: rem(18), height: rem(18) }} color={theme.colors.gray[4]} />
          }
          rightSection={
            <Button h="2rem" mr="sm" type="submit">
              Search
            </Button>
          }
          rightSectionWidth="6.25rem"
          styles={{ input: { paddingLeft: '2.25rem', height: '3rem' } }}
        />
      </form>
    </Box>
  );
}
