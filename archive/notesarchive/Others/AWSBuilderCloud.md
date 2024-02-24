[aws.training]
# AWS Builder Series - 

## How to deploy your first web application

- Static Sites
*AWS amplify console* is static web hosting series. Gives effortless CI/CD workflow. Just have to connect Amplify to Git repository.
Any website using JS framework or even SSGs.

- Dynamic Sites
*Amazon Lightsail* is ideal for websites needing VPS i.e, dynamic sites. Has simple web console & can let us grow and even shift to *Amazon EC2*. It is perfect for E-commerce,financial & accounting software.Plan start at 3.5$/month.
Amazon EC2 is for large complex enviroment like Big data computing,Scientific computations.


*AWS Elastic Beanstalk* - Upload your code & let Aws manage it. Helps us reducing operational overhead, we focus on building. A single service to deploy web application, AWS manages Load balancing,Networks etc.



## AWS for Startups

Why?
	Zero upfront cost
	Launch faster
	Experiment often at low risk : Fail fast if idea does'nt work
	Focus on core business value

Global startup business development - 
Partner with investorsYcombinator

Journey-
	MVP -> Product Market fit -> Growth()

*AWS Activate - Founders(Self funded)* 
	Benefits like $100000 USD credits valid for a year, Technical Support.
*AWS Activate - Portfolio*

Startup mentorship programme - connects to founders & leaders of startups

AWS capital connect - Direct 1:1 introduction between specified investors and startup or VC speed dating event.

APN Gloabal startup program - Technical training
AWS Marketplace
Startup co-branding


## 9 ways to optimize cost in cloud

- Stop paying for idle EC2 & RDS instances.(like in holidays), Shutdown non-production workloads in weekends
	Soln: AWS Instance Scheduler

- Use Arm-based EC2 instance,upto 40% better price performance over x86-based instances for many workloads
	Soln: Migrate to AWS Graviton2 processors 

- Choose EC2 Spot instances for stateless, fault toleratn & loosely coupled. If there are free instances you will get at discounted price.(upto 90%)
EC2 Spot workshop is a great resource
	Soln: Amazon EC2 Spot

- Stop paying for underutilized EC2 instances(Saves $100s to $1000s)
	Soln: EC2 Resource optimization recommendations in *AWS Cost Explorer*

- Use an S3 lifecycle configuration to transistion objects to cost-optimized storage classes. Shift infrequent access data to different storage class.
	Soln: S3 lifecycle config rules

- Enable S3 Intelligent tiering- A storage class that is used to optimze S3 cost for objects whose pattern is not known

- Use S3 gateway endpoint from your pvt subnet instance inside a VPC. IF EC2 & S3 is in same region & we dont need to connect to internet.Less load on NAT gateway
	Soln: S3 Gateway endpoint

- Use On-demand capacity mode for DynamoDB 

- Use Compute Savings plan. 


## Increase Efficiency of your Backup & Recovery workflow

Data loss is costly.

Traditional Approach - On premises Storage
Appln Servers,Backup Servers,Tape storage & localstorage -> data bunker

AWS Storage Approach - 
S3 : Object storage service, virtually scalable unlimited, No upfront cost,Secure
S3 classes - Standard,Intelligent Tiering,standard IA, One Zone-IA, Glacier, Glacier Deep archive
--> Cost per GB reduces

AWS Backup: A fully managed, policy based backup service that makes it easy to centrally manage & automate the backup of data across AWS services.


## Purpose-built Daabases

Time for Monolithic databases is gone. Not every use case needs RDBMS.Devs are making loosely coupled & distributed appln, so we need different DBs.

Why-
Scale, Performance, Availability

AWS DBs -

- **Relational** : Tabular data *[Aurora,RDS]*
- **Key-Value** : Key-value. Good for instant scaling *[DynamoDB]* Ex - duolingo 24000 reads/s & 3000 writes/s
- **Document** : JSON type maximum flexibility, like for content management.Just like MongoDB but better for scalability.*[DocumentDB]* Ex - finra
- **In-Memory** : For Real time applns. Can be used with Relational DB.*[ElastiCache - MemCache,Radis(very sexy)]*
- **Graph** : NoSQL,good for social N/W or fraud detection*[Neptune]*
- **Time Series** : For IOT,DevOps data *[Timestream]*
- **Ledger DB** : Immutable type, Different from blockchain as it doesnt need Consensus distributed model.*[Quantum Ledger]*
- **Apache Cassandra** : Open source, wide-column data store.