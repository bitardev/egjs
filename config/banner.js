module.exports = ["/**",
"* <%= pkg.name %>",
"* @version <%= pkg.version %>",
"* @SHA-1 <%= gitinfo.shortSHA %>" +
"<%= /(?!^master$)(^.*$)/.test(gitinfo.branchName) " +
"	&& ' ('+ RegExp.$1 +')' || '' %>",
"*",
"* <%= pkg.author %>; <%= pkg.name %> JavaScript library",
"* http://egjs.navercorp.com/",
"*",
"* Released under the <%= pkg.licenses[0].type %> license",
"* <%= pkg.licenses[0].url %>",
"*/\n\n"].join("\n");