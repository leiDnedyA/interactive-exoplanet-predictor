# Import the libraries for the algortihm
# Sklearn
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
# Pandas for database processing
import pandas as pd
# Joblib to dump and laod the model
import joblib

# DataFrame, we read the csv with pandas.
df = pd.read_csv('Backend\Data\New_data_nov_2022.csv', sep=',')

# Select and classify the variables considered due to the correlation study.
# In t
var_df = df[['sy_snum', 'sy_pnum', 'st_teff', 'st_rad', 'st_mass',
             'st_met', 'st_age', 'st_dens', 'st_radv', 'st_logg']]

# Drop all the rows with NaN values.
true_df = var_df.dropna()

# Separate the variables from the clean data.
# X are the variables of the star, y is the number of planets that the star has.
x = true_df[['st_teff', 'st_rad', 'st_mass', 'st_met',
             'st_age', 'st_dens', 'st_radv', 'st_logg']]
y = true_df[['sy_pnum']]

# Split the data into training and testing data.
X_trainset, X_testset, y_trainset, y_testset = train_test_split(
    x, y, test_size=0.2, random_state=3)

# Call the RandomForestClassifier from sklearn.
planet_predictor = RandomForestClassifier(n_estimators=1000, criterion='gini')

# Fit the model with the training data.
planet_predictor.fit(X_trainset, y_trainset)

# Save the model with joblib.
joblib.dump(planet_predictor,
            'Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib')

# Predict the number of planets with the test data.
predTree = planet_predictor.predict(X_testset)

# Evaluate the model with the test data.
print("Precisión de los Arboles de Decisión: ",
      metrics.accuracy_score(y_testset, predTree))
print(metrics.confusion_matrix(y_testset, predTree))
print(metrics.classification_report(y_testset, predTree))
print(metrics.accuracy_score(y_testset, predTree))

print("Entrenar el set de Certeza: ", metrics.accuracy_score(
    y_trainset, planet_predictor.predict(X_trainset)))
print("Probar el set de Certeza: ", metrics.accuracy_score(predTree, y_testset))
