const express = require('express');
const { default: ParseServer, ParseGraphQLServer } = require('parse-server');
const ParseDashboard = require('parse-dashboard');
const config = require('./configs/parse-config.json');

const app = express();

const parseServer = new ParseServer(config["api"]);
const parseGraphQLServer = new ParseGraphQLServer(parseServer, config["graphql"]);
const parseDashboard = new ParseDashboard(config["dashboard"], { allowInsecureHTTP: true });

app.use('/parse', parseServer.app); // (Optional) Mounts the REST API
parseGraphQLServer.applyGraphQL(app); // Mounts the GraphQL API
parseGraphQLServer.applyPlayground(app); // (Optional) Mounts the GraphQL Playground - do NOT use in Production
app.use('/dashboard', parseDashboard); // (Optional) Mounts the ADMIN DASHBOARD

app.listen(config["port"], function() {
  console.log('parse server running on port : ' + config["port"]);
});
