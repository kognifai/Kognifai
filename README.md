

# About Kognifai                    [![Gitter Join the chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kognifai/Lobby)

Welcome to Kognifai Software Development Kit (SDK)!

As a part of Kongsberg’s open ecosystem, Kognifai™ is an open and collaborative digital platform for accessing data, applying advanced analytics, running applications and accelerating digitalization initiatives in your industrial world. 

## What can you achieve with Kognifai? 
-	Kognifai helps you accelerate the digitalization of your industry-specific solutions

-	With Kognifai, you can gain access to KONGSBERG’s extensive portfolio of standalone solutions as well as third-party solutions

-	Being an open source digital platform, Kognifai is a development hub and storefront for external developers and encourages participation and collaboration

-	You can develop your own applications and services using Kognifai’s web application framework

-	You can subscribe to the solutions as and when you need them with software-as-a-service (SaaS) approach

-	You will get a highly secured and protected development environment by the highest level of cybersecurity and a strict application certification process for all third-party services and applications

## Kognifai and its components 
Kognifai is available for both, as an Edge on premise installation, and as a cloud service, offering secure connectivity and application services to your global assets.

Being an open digital ecosystem Koginfai enables its users to collect, store, analyze, and apply the data (which is generated using Kongsberg and third-party systems). 

The Kognifai ecosystem consists of:
-	An IoT Platform [Kognifai IoT](https://github.com/kognifai/IoT)
-	A sensor database (We call it Galore!)
-	Analytic services
-	Web application framework (As of now, we call it Poseidon Next!) 
-	Network infrastructure
-	Identity management
-	Container and hosting services
-	Machine learning platform
-	APIs
-	Storage
-	Self-service management portals

In the Kognifai documentaion,  you will find documentation on each component, SDK documentation, and examples on how to get started developing Kognifai App, Services and Connectors.

Together, all these components fit into an architectural diagram like this (See the image below) and make it a complete digital platform called “Kognifai”.

![image.png](.attachments/Kognifai.png)

## Poseidon Next – Framework   [![Gitter Join the chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kognifai/Lobby)

Poseidon is the Kognifai web application framework, built on Angular, by using the Kognifai Design System. It provides a fast way of developing and deploying new applications on both KONGSBERG Edge and Kognifai Cloud installation scenarios.

The framework takes responsibility for a range of basic features and it is built in a modular way which opens up for different adaption levels.

![](.attachments/Posedion.jpg)
 
* Identity Management – Embedded ThinkTecture Identity Server for authentication  a range of integrated IDs
*	Responsive Web Design – Support for all screen sizes.
*	Design System – The framework is built on the Kognifai Design System.
*	Edge and Cloud support - Support for Edge and cloud-based solution.

In this SDK you will find documentation on how to develop your own Poseidon applications, starting with the Poseidon Developer Edition available from https://npmjs.org and the sample application is also provided.

#### Explore these topics to know more about Poseidon Next Framework  
-  [Poseidon Next – Framework](https://github.com/kognifai/PoseidonNext-Framework/blob/master/README.md) 
    - [Developers Getting Started page](https://github.com/kognifai/PoseidonNext-Framework/blob/master/Developers-Getting-Started.md)
    - [Services](https://github.com/kognifai/PoseidonNext-Framework/blob/master/Services.md)

   
 ## Galore   [![Gitter Join the chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kognifai/Lobby)
 
Galore is the Kognifai time series and streaming database that is available as both an on-premise installable database and a Kognifai cloud service. The database is highly scalable and can be installed on everything from a small edge PC to a large cluster, supporting the smallest edge analytic scenarios as well as fleet wide global data collection and analytic scenarios.

This industrial quality database supports storage, analytics and distribution of most sensor like streaming data types:

*	Time series data – Single values, vectors or matrixes
*	Alarm & Event data – Indexed, searchable and related text values
*	Dataset – Larger dataset from high frequency analytic sensors and subsystems
*	Asset Structures – Mapping physical industrial plants into structures, supporting templates and advanced graphs

 ![](.attachments/Posedion_Graph.jpg)

The Galore database is built upon the concept of streams where all data is queryable either through the built-in advanced Time series Query Language (TQL) or through APIs.

In this SDK you will find detailed information on how to access and start using Galore, how to get started using the TQL language and how to use the APIs.

#### Explore these topics to know more about Galore
 -  [Galore](https://github.com/kognifai/Galore/blob/master/README.md)
      - [Galore Asset Model](https://github.com/kognifai/Galore/blob/master/Galore-Documentation/readme.md)
      - [Streams](https://github.com/kognifai/Galore/blob/master/Galore-Documentation/streams.md)
      - [TQL Syntax](https://github.com/kognifai/Galore/blob/master/Galore-Documentation/TQL%20Syntax.md)
      - [Node Selector](https://github.com/kognifai/Galore/blob/master/Galore-Documentation/Node%20Selector.md) 
      - [Pipeline Operations](https://github.com/kognifai/Galore/blob/master/Galore-Documentation/Pipeline%20Operations.md)
      - [Case Study](https://github.com/kognifai/Galore/blob/master/Galore-Documentation/casestudy.md)

## Kognifai IoT    [![Gitter Join the chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kognifai/Lobby)
The Kognifai IoT Platform is an industrial solution for securely connecting, managing and integrating remote devices and systems. Targeting everything from embedded sensors to energy production facilities; the platform is capable of scaling to thousands of globally distributed on and offshore installations.

Kognifai provides self-service portals for roll out and management of customer solutions, as well as, a wide range of industrial connectors ensuring safe and reliable connectivity with data sources on the Edge. Common connectors available on Kognifai are OPC UA, OPC DA / HDA, ModBus among others.

This SDK provides you  samples and documentation on how to build your own custom connector to integrate with a system that does not support these standard industrial interfaces.

 ![](.attachments/IoT.png)

Connectors feed the Kognifai Edge Gateway which is responsible for data buffering in the case of connectivity loss, for compression, for secure authentication and for transport encryption to the Kognifai cloud endpoints:

-	Secure and reliable data transfer from Edge to cloud using AMQP, MQTT or HTTPS over TLS
-	Authentication towards Kognifai cloud services using certificates or shared secrets
-       Data buffering to support disk offline scenarios
-	Reliable data transfer over unreliable communication channels
-	Logging, health and security data reporting

#### Related Topics

 -  [Kognifai IoT](https://github.com/kognifai/IoT)
      - [Connector SDK](https://github.com/kognifai/IoT/blob/master/SDK%20Documentation/readme.md)
      - [IoT Platform Architecture overview](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Overview%20-%20IoT%20Platform%20Architecture%20Overview.md)
      - [Edge deployment models](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Overview%20-%20Edge%20Deployment%20Models.md) 
     - [Edge connectors and endpoints overview](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Overview%20%20Connectors%20and%20Endpoints%20.md)
     - [Sensor Configuration overview](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Overview%20-%20Sensor%20Configuration%20Overview.md)
     - [IoT platform security](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Overview%20-%20Security.md)
     - [Edge gateway components](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Edge%20Gateway%20Components.md)
     - [Register a new device](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Deploy-%20register%20a%20new%20edge%20device.md)
     - [Support for low bandwidth scenarios](https://github.com/kognifai/IoT/blob/master/IoT%20Documentation/Support%20for%20low%20bandwidth%20scenarios.md)
 
### Infrastructure   [![Gitter Join the chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/kognifai/Lobby)

The Kognifai platform provides infrastructure for both Edge and Cloud. The secure connectivity is needed among sites, edges, cloud and other platforms.

![](.attachments/Infrastructure.jpg)

#### Related Topics
- [Infrastructure - GSN Overview](https://github.com/kognifai/Infrastructure/blob/master/Readme.md)
    * [Life Cycle Management](https://github.com/kognifai/Infrastructure/blob/master/Documentation/GSN%20Overview.md)
    - [High-level Design](https://github.com/kognifai/Infrastructure/blob/master/Documentation/High-level%20Design.md).
    - [Securing Internet of Things](https://github.com/kognifai/Infrastructure/blob/master/Documentation/Securing%20Internet%20of%20Things.md).
     
