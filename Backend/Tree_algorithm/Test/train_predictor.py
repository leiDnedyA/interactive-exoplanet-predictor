import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

df = pd.read_csv('Backend\Data\PSCompPars_2021.04.20_19.50.36.csv', sep=',')
# Select and classify the variables considered due to the correlation study.
var_df = df[['sy_snum', 'sy_pnum', 'st_teff', 'st_rad', 'st_mass', 'st_met', 'st_age', 'st_dens', 'st_radv', 'st_logg']]

true_df = var_df.dropna()

x = true_df[['st_teff', 'st_rad', 'st_mass', 'st_met', 'st_age', 'st_dens', 'st_radv', 'st_logg']]
y = true_df[['sy_pnum']]


from sklearn.model_selection import train_test_split

planet_predictor = RandomForestClassifier(n_estimators=1000, criterion='gini')
 
X_trainset, X_testset, y_trainset, y_testset = train_test_split(x, y, test_size=0.2, random_state=3)

planet_predictor.fit(X_trainset, y_trainset)

joblib.dump(planet_predictor, 'Backend\Tree_algorithm\Saved_models\exoplanet_predictor.joblib')

predTree = planet_predictor.predict(X_testset)

from sklearn import metrics

print("Precisión de los Arboles de Decisión: ", metrics.accuracy_score(y_testset, predTree))
print(metrics.confusion_matrix(y_testset, predTree))
print(metrics.classification_report(y_testset, predTree))
print(metrics.accuracy_score(y_testset, predTree))

print("Entrenar el set de Certeza: ", metrics.accuracy_score(y_trainset, planet_predictor.predict(X_trainset)))
print("Probar el set de Certeza: ", metrics.accuracy_score(predTree, y_testset))

from sklearn import tree

tree.export_graphviz(planet_predictor, out_file='out.dot', feature_names=['st_teff', 'st_rad', 'st_mass', 'st_met', 'st_age', 'st_dens', 'st_radv', 'st_logg'], class_names=np.unique(y_trainset.astype(str)), label='all', rounded=True, filled=True)
