# Week-1
Cloud is commercial availability of individal comupting services.

- "On demand service" model
- Delivered remotely via internet

---
Distributed computing is used in cloud for performance and reliability.

All cloud services are delivered in a `virtualized mehod`.Hypervisor allocates services to individual instances.
2 types -
1. Type 1 : Runs directly on Hardware
2. Type 2 : Managed by an OS 

---
Managed Infrastructure - Cloud provides console.

Service can be categorized as - 
1. SAAS - Software products.
2. PAAS - Delivers development platforms to firms.
3. IAAS - Basic layer of computing. Ex- hosting,Db etc

FAAS - Similar to PAAS.
Real time functionality to firms, when functionality is needed. With FAAS, customers do not pay for idle time.
Provides processing data not storage of data.Also referred to as serverless computing. 
Ex- AWS Lambda, Google functions etc.

# Week-2

## Deployment models

1. `Private Deployment Model` - Firm has the data center where Cloud is hosted. Cloud services delivered by firms private internal network. 
	`VPC` - Services provided over VPN to a firm so as to save firm staffing and managing infrastructure yet have that security.

2. `Public Deployment Model` - Delivered over public network.

3. `Hybrid Deployment Model` - Mix of on-premises private cloud & services from a public cloud provider. Popular approah - Pvt cloud for key data while public cloud for IAAS.

4. `HPC (High Performance Computing)` - 
Innvloves Parallel processing. Architectre of arrayed computers or processors. Architecture runs together in a cluster.


Note - Cloud services can be delivered On-Premises.CONTROL THE DATA.
---
## Hosting Strategies

`Bare Metal Hosting` - Strategy where S/W products, inclusing the OS, are installed on Physical H/W. No vitualization used. Problem is H/W will be underutilized.

`Virtual Machines` - With help of Hypervisor we can fully utilize Hardware.

`Docker` - Docker uses containers for hosting & deployment strategy.Does'nt provide full VM but does use virtualization. Docker provides PAAS, virtualized OS enviroments called containers.Containers are independent from each other.Docker needs single OS kernel called Docker engine. Containers are much simpler than full VMs.

`Kubernetes` - PAAS containre orchestration product but can also offer IAAS. Kubernetes automates appln deployment,scaling and maintenance.Built on layers or blocks & blocks are built up as appln grows.Pods make up kuberenetes cluster. A pod is independent & has its own IP.

---
`Edge Computing` - Variation of Cloud, computing services are brought physically closer to customer, thereby reducing latency. USe cases - Gaming, IOT, Healthcare.

# Week-3

Azure - March,2014
AWS - March,2006
GCP -
IBM Cloud - 2010
Salesforce - 1999, Initially delivered CRM.
Alibaba Cloud

## Future of Cloud Computing

Serverless Computing - Extension of FaaS. Pricing is based on computing time used. It is just executional service and data is not stored generally.
Disadvantages - Needs startup time.
Mobility can be a problem since it is often based on proprietary provider standards.

Distributed Applns - DLT(Distributed Ledger Technology) is based on network of computer called nodes, & store data in immutable fashion.
Cloud is ideal for this as nodes can be deployed as needed.

ML & AI - Decesion making by processing huge amount of data.

IOT - Fondation for Smart devices & automated devices.