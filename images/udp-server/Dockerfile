FROM java:8-jdk-alpine

ENV email quentin.zeller@heig-vd.ch

RUN apk update && \
	apk add bash && \
	apk add tcpdump && \
	mkdir -p /var/udp/config && \
	wget http://novaflux.heig-vd.ch/users?email=$email -O /var/udp/config/params.txt
	
COPY install/UdpServer-1.0-SNAPSHOT-standalone.jar /opt/res/server.jar

CMD ["java", "-jar", "/opt/res/server.jar"]

