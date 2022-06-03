import React, { memo } from "react";

const MemoizedExtraFooter = memo(ExtraFooterTest);

function ExtraFooterTest() {
  console.log("I'm testing the extrafooter");
  return <div>ExtraFooterTest</div>;
}

export default MemoizedExtraFooter;
