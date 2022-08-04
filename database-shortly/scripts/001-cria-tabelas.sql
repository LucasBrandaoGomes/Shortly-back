CREATE TABLE users_urls (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"url_shortened_id" integer NOT NULL,
	"views" integer NOT NULL DEFAULT '0',
	"create_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "users_urls_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE urls (
	"id" serial NOT NULL,
	"url" varchar NOT NULL,
	"short_url" varchar NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "urls_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE users (
	"id" serial NOT NULL,
	"name" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL UNIQUE,
	"password" varchar NOT NULL,
	"created_at" TIMESTAMP NOT NULL DEFAULT 'now ()',
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "users_urls" ADD CONSTRAINT "users_urls_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "users_urls" ADD CONSTRAINT "users_urls_fk1" FOREIGN KEY ("url_shortened_id") REFERENCES "urls"("id");