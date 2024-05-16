interface MoviePageProps {
  params: { id: string };
}

export default function MoviePage({ params: { id } }: Readonly<MoviePageProps>) {
  return <div>Movie page: {id}</div>;
}
