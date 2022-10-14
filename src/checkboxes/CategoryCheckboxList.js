import React from "react";
import { useRecoilValue } from "recoil";
import { layerDefsIDsSelectorForCategory } from "../layerDefs/selectors";

import LayerCheckbox from "./LayerCheckbox";
import LayerGroupCheckboxList from "./LayerGroupCheckboxList";

const CategoryCheckboxList = ({ category }) => {
  const layerIDsForCategory = useRecoilValue(
    layerDefsIDsSelectorForCategory(category)
  );

  return (
    <>
      {layerIDsForCategory.map((layerID, index) =>
        typeof layerID === "string" ? (
          <LayerCheckbox key={layerID} layerID={layerID} />
        ) : (
          <LayerGroupCheckboxList key={`group-${index}`} layerIDs={layerID} />
        )
      )}
    </>
  );
};

export default CategoryCheckboxList;
