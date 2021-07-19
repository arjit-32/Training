# Course-1 : Supervised learning with sklearn

ML is ability to learn to make decesions from data
Supervised - Have labels
Unsupervised - No labels on data. Uncovering hidden patterns
Reinforcement - Learn how to optimize their behaviour

Learning task are of 2 types - 
Classification : Target variable consist of categories. ex - spam or not spam
Regression : Continuous target variable. ex - house price

## EDA: Exploratory data analysis
1. Numerical EDA

```python
    type(df) # pandas.core.frame.DataFrame

    df.info() # Info like rows & col names/types
    
    df.head(5) # prints 5 rows

    df.describe() # mean/median etc for each feature
```

2. Visual EDA

```python
    plt.figure() # makes a new figure 

    sns.countplot(x='education', hue='party',data=df, palette='RdBu') # Seaborn's countplot 

    plt.xticks([0,1], ['No', 'Yes'])

    plt.show()
```

## Classification
Using KNN to 