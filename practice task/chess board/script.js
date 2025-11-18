const chess= document.querySelector(".chessboard");

const oddRow=`<div class="square"></div>`.repeat(8);
const evenRow=`<div class="square-even"></div>`.repeat(8);

const completeHtml=`${oddRow}${evenRow}`.repeat(4);

chess.innerHTML = completeHtml;