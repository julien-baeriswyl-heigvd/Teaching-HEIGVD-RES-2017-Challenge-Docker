FROM java:8-jdk-alpine

#
# =========================================================================================================
# REMPLACEZ olivier.liechti@heig-vd.ch par votre adresse mail. Attention à ne pas faire de faute de frappe.
# =========================================================================================================
#

ENV email julien.baeriswyl@heig-vd.ch

#
# =========================================================================================================



RUN apk update && \
	apk add bash && \
	apk add tcpdump && \
	mkdir -p /var/udp/config && \
	wget http://novaflux.heig-vd.ch/users?email=$email -O /var/udp/config/params.txt
	
COPY install/UdpServer-1.0-SNAPSHOT-standalone.jar /opt/res/server.jar

CMD ["java", "-jar", "/opt/res/server.jar"]

