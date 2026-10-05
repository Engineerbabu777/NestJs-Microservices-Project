CREATE TABLE "dispataches" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_id" varchar(255) NOT NULL,
	"customer_name" varchar(255) NOT NULL,
	"item" varchar(255) NOT NULL,
	"rider_status" varchar(50) DEFAULT 'dispatched' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
