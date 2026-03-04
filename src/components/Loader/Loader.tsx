import { LoaderIcon } from '@/assets/icons';
import { useAppStore } from '@/store/hooks/useAppStore';

import * as Styled from './Loader.styled';

export const Loader = () => {
  const { isLoading } = useAppStore();

  return isLoading ? (
    <Styled.LoaderContainer>
      <LoaderIcon />
    </Styled.LoaderContainer>
  ) : null;
};
