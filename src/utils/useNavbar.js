'use client';
import { useState } from 'react';

const useNavebar = ({ paths = [] } = {}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const HandleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };
 
  const filteredData = paths?.find(item => item.title === menuOpen);

const handleMenuClick = (name) => {
  setMenuOpen((prev) => (prev === name ? null : name));
};

  return {
    menuOpen,
    handleMenuClick,
    setMenuOpen,
    HandleSearchOpen,
    setSearchOpen,
    searchOpen,
    filteredData,
  };
};

export default useNavebar;
