ARG := $(word 2, $(MAKECMDGOALS) )

clean:
	@find . -name "*.pyc" -exec rm -rf {} \;
	@find . -name "__pycache__" -delete

test:
	# Run django tests locally
	python backend/manage.py test backend/ $(ARG)

dockertest:
	# Run django tests in docker environment
	docker-compose run backend python manage.py test $(ARG)
