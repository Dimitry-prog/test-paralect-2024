import { NavLink, Stack } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navMenuItems } from '@/shared/components/nav-menu/nav-links';

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <Stack>
      {navMenuItems.map((link) => (
        <NavLink
          key={link.href}
          component={Link}
          href={link.href}
          label={link.label}
          styles={(theme) => ({
            root: {
              backgroundColor: pathname === link.href ? theme.colors.purple[2] : '',
              borderRadius: '8px',
            },
            body: {
              fontSizes: '16px',
              fontWeight: pathname === link.href ? 700 : 400,
              lineHeights: '22.4px',
              color: pathname === link.href ? theme.colors.purple[6] : theme.colors.black[10],
            },
          })}
        />
      ))}
    </Stack>
  );
};

export default NavMenu;
