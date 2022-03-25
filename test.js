const testObj = {
	a: "moya",
	b: "baozi",
	c: "nicai",
	d: "xiaoyu",
};

x = Object.keys(testObj);
x.map((key) => {
	console.log(testObj[key]);
});
