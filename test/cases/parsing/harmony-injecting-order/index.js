it("should inject variables before exporting", function() {
	require("./file").f().should.equal("/");
});
