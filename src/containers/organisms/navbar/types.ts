import { BrandProps } from '../../../components/molecules/navbar/brand/types';
import { Menu } from '../../../types/defaults';

export interface NavbarProps {
  brand: BrandProps;
  menuItems: Menu[];
}
