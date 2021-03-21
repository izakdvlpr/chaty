# include /home/zevdvlpr/www/chaty/packages/api/.env

.PHONY: up

up:
	docker-compose --env-file ./packages/api/.env up -d

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f