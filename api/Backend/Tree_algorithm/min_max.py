import pandas as pd
from Backend.Utils import directory_manager
# DataFrame, we read the csv with pandas.
df = pd.read_csv(directory_manager.getDirectory('Backend\Data\PSCompPars_2021.04.20_19.50.36.csv'), sep=',')

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

# Find the mininum value for each variable in x.
min_teff = x['st_teff'].min()
min_rad = x['st_rad'].min()
min_mass = x['st_mass'].min()
min_met = x['st_met'].min()
min_age = x['st_age'].min()
min_dens = x['st_dens'].min()
min_radv = x['st_radv'].min()
min_logg = x['st_logg'].min()

# Find the maximum value for each variable in x.
max_teff = x['st_teff'].max()
max_rad = x['st_rad'].max()
max_mass = x['st_mass'].max()
max_met = x['st_met'].max()
max_age = x['st_age'].max()
max_dens = x['st_dens'].max()
max_radv = x['st_radv'].max()
max_logg = x['st_logg'].max()
