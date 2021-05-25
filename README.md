# uftdev-sv-test-on-aos-main
uftdev-sv-test-on-aos-main

UFT Developer test with embedded virtual service on AOS

UFT Developer with Embedded Service Virtualization provides capabilities to allow users to Discover, Learn and Simulate virtual services within the IDE and use them in the testing project. 

Demo Environment
This demo asset created on:
NimbusServer 2019 R1 
IDEA intelliJ 2.2 with the UFT Developer 
Advantage Online Shopping 2.2  

You should start all the containers in NimbusServer before running this test.

Configuration
You will need to enable SV in UFT Developer, this will be enabled in the future versions of the intellij Docker image.

To enable SV you should update the config.json inside the intellij container:
1.	docker exec -it intellij bash
2.	cd ~/.leanft/config
3.	Add the following to config.json file:
  "sv":{
           "enabled": true
       }
 For more details https://admhelp.microfocus.com/uftdev/en/15.0/HelpCenter/Content/HowTo/SV-Integration.htm#Configur 

Demo Steps:
1.	Download the test project files, it can be found at ADM Prelases GitHub repository ( you should be connected to the MF network) https://github.houston.softwaregrp.net/AMSPreSales-Demos/UFT-Dev-with-Embedded-SV-test-on-AOS/blob/master/Test_SVLab.zip 
2.	Extract the files and open the project.
3.	Show a login and logout scenario on the AOS 
4.	Now stop the AOS-account service at the nimbusserver
5.	Show that the AOS app could not function
6.	Run the test from intellij and show the customer that the test passed successfully.

Demo asset flow:
1.	Set the chrome proxy to the correct port that used to communicate with the Virtual Service. 
2.	Browser open with the AOS URL 
3.	Load the virtual service aos-accountservices
4.	Login to AOS
5.	Logout from AOS
6.	Stop the virtual service

You can watch this video to learn more how this test created using the embedded SV lab in UFT Developer: https://www.youtube.com/watch?v=1O1EKYFCcx0&list=PLLkt3dLab1_XEzk90VeFlNRFponaPgk98

