import { getNavbarData } from "@/api/header";
import CoderwireHeader from "@/Components/common/Header/CoderwireHeader";
export default async function Navbar() {
  const { menus, sideButton, filteredSiteDetails } = await getNavbarData();

  return (
    <>
  
      {menus?.length > 0 && (
        <CoderwireHeader  
          menus={menus}
          sideButton={sideButton}
          filteredSiteDetails={filteredSiteDetails}
        />
      )}
    </>
  );
}

export const revalidate = 3600;
