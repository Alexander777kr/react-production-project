import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink
                to="/about"
                theme={AppLinkTheme.RED}
            >
                О сайте
            </AppLink>
        </div>
    </div>
);