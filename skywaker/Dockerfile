FROM %%BASE_IMAGE%%

ENV LANG C.UTF-8

RUN apk add --no-cache jq nodejs nodejs-npm git \
	
	&& mkdir repo \
	&& cd repo \
	&& git init . \
	&& git remote add -f origin https://github.com/hudecitydave/hassio-addons \
	&& git config core.sparseCheckout true \
	&& echo "hass/sky-hass-waker/" >> .git/info/sparse-checkout \
	&& git pull origin master \
	&& cd hass/sky-hass-waker \
	&& npm config set unsafe-perm true \
	&& npm install -g mustache \
	&& npm install -g sky-remote-cli \
	&& npm install -g sky-remote \
	&& npm install -g . \
	&& npm config set unsafe-perm false \
	&& cd ../../../ \
	&& rm -rf repo

COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]