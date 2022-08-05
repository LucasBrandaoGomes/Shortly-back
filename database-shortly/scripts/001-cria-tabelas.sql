CREATE TABLE users (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE urls (
	"id" serial NOT NULL,
	"user_id" serial NOT NULL,
	"url" varchar NOT NULL,
	"short_url" varchar NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now()',
	"views" integer DEFAULT '0',
	CONSTRAINT "urls_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "urls" ADD CONSTRAINT "urls_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");



