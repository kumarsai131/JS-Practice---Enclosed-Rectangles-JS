//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	if(rec1.top+rec1.height > rec2.top+rec2.height && rec1.left+rec1.width > rec2.left+rec2.width && rec1.top<rec2.top && rec1.left<rec2.left)
		return {top: rec1.top, left: rec1.left, height: rec1.height, width: rec1.width, children:[{top:rec2.top,left:rec2.left,height:rec2.height,width:rec2.width, children:[]}]};
	else if(rec1.top+rec1.height == rec2.top+rec2.height && rec1.left+rec2.width == rec2.left+rec2.height && rec1.top==rec2.top && rec1.left==rec2.left)
		return {top: rec2.top, left: rec2.left, height: rec2.height, width: rec2.width, children:[{top:rec1.top,left:rec1.left,height:rec1.height,width:rec1.width, children:[]}]};
	else
		return {top: rec1.top, left: rec1.left, height: rec1.height, width: rec1.width, children:[]}
}

module.exports = updateStructure;
