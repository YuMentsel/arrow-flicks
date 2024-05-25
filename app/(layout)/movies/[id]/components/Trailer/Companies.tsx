import { Text, Title, Image, Flex, Stack } from '@mantine/core';
import company from '@/../../public/production-company.png';
import classes from './styles.module.css';

interface CompaniesProps {
  companies: ProductionCompany[];
}

export function Companies({ companies }: Readonly<CompaniesProps>) {
  return (
    <>
      <Title order={3} fz="md">
        Production
      </Title>
      <Stack gap="xs">
        {companies.map(({ id: companyId, name, logo_path }) => (
          <Flex key={companyId} align="center" gap="0.5rem">
            <Flex w="2.5rem" h="2.5rem" className={classes.img}>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMG_URL}/w500${logo_path}`}
                alt={`Poster of ${name}`}
                fallbackSrc={company.src}
                fit="contain"
              />
            </Flex>
            <Text fz="sm" fw={700}>
              {name}
            </Text>
          </Flex>
        ))}
      </Stack>
    </>
  );
}
