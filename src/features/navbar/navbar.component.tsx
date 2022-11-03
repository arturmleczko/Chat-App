import S from './navbar.styles';

import {
  AiOutlineHome as HomeIcon,
  AiOutlineEdit as EditIcon,
  AiOutlineUser as UserIcon,
  AiOutlineSetting as SettingsIcon,
} from 'react-icons/ai';
import {
  BsChatDots as ChatIcon,
  BsBookmark as BookmarkIcon,
} from 'react-icons/bs';

const navbarItems = [
  {
    name: 'home',
    icon: HomeIcon,
    active: false,
  },
  {
    name: 'edit',
    icon: EditIcon,
    active: false,
  },
  {
    name: 'profile',
    icon: UserIcon,
    active: false,
  },
  {
    name: 'chat',
    icon: ChatIcon,
    active: true,
  },
  {
    name: 'bookmark',
    icon: BookmarkIcon,
    active: false,
  },
  {
    name: 'settings',
    icon: SettingsIcon,
    active: false,
  },
];

const Navbar = () => (
  <S.NavbarContainer>
    {navbarItems.map(({ name, icon: Icon, active }) => (
      <S.NavbarItem key={name} $active={active}>
        <Icon />
      </S.NavbarItem>
    ))}
  </S.NavbarContainer>
);

export default Navbar;
