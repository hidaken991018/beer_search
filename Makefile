gen:
	cp ../crafters-api/graph/schema.graphqls ./graphql/schema.graphql 
	yarn run graphql-codegen --config ./graphql/codegen-server.yaml