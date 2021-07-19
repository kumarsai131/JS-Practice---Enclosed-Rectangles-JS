//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	if(rec1.top == rec2.top && rec1.left==rec2.left && rec1.width == rec2.width && rec1.height = rec2.height)
		return {rec1.top,rec1.left,rec1.width,rec1.height, children:[{rec2.top,rec2.left,rec2.width,rec2.height, children:[]}]};
	
}

module.exports = updateStructure;
