import { ImgInfoState } from '@/app/components/ImgInfoState';
import { UIAlt, UIMessage } from '@/app/types/enums';
import noMovies from '@/../../public/no-movies.png';

export function EmptyList() {
  return <ImgInfoState src={noMovies} alt={UIAlt.NoMovies} message={UIMessage.NoMovies} />;
}
