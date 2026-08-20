# ❤️ Customer Health Flow

```mermaid
flowchart TD

A[Health Indicators]

A --> B[Communication]

A --> C[Delivery]

A --> D[Invoices]

A --> E[Satisfaction]

B --> F[Health Score]

C --> F

D --> F

E --> F

F --> G{Status}

G -->|Green| H[Healthy]

G -->|Yellow| I[Monitor]

G -->|Red| J[Escalate]
```
