from Backend.Tree_algorithm import model_predictor

def onePlanet(true_df):
    p1 = true_df.loc[true_df['sy_pnum'] == 1]

    st_teff = p1.iloc[0][2]
    st_rad = p1.iloc[0][3]
    st_mass = p1.iloc[0][4]
    st_met = p1.iloc[0][5]
    st_age = p1.iloc[0][6]
    st_dens = p1.iloc[0][7]
    st_radv = p1.iloc[0][8]
    st_logg = p1.iloc[0][9]

    features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

    pred_check = model_predictor.Predict_Simple([features_list])

    if pred_check == 1:
        return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}
    
    else:
        return False
    
    
def twoPlanets(true_df):
    p2 = true_df.loc[true_df['sy_pnum'] == 2]

    st_teff = p2.iloc[0][2]
    st_rad = p2.iloc[0][3]
    st_mass = p2.iloc[0][4]
    st_met = p2.iloc[0][5]
    st_age = p2.iloc[0][6]
    st_dens = p2.iloc[0][7]
    st_radv = p2.iloc[0][8]
    st_logg = p2.iloc[0][9]

    features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

    pred_check = model_predictor.Predict_Simple([features_list])

    if pred_check == 2:
        return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}
    
    else:
        return False

def threePlanets(true_df):
    p3 = true_df.loc[true_df['sy_pnum'] == 3]

    st_teff = p3.iloc[0][2]
    st_rad = p3.iloc[0][3]
    st_mass = p3.iloc[0][4]
    st_met = p3.iloc[0][5]
    st_age = p3.iloc[0][6]
    st_dens = p3.iloc[0][7]
    st_radv = p3.iloc[0][8]
    st_logg = p3.iloc[0][9]

    features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

    pred_check = model_predictor.Predict_Simple([features_list])

    if pred_check == 3:
        return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}
    
    else:
        return False

def fourPlanets(true_df):
    p4 = true_df.loc[true_df['sy_pnum'] == 4]

    st_teff = p4.iloc[0][2]
    st_rad = p4.iloc[0][3]
    st_mass = p4.iloc[0][4]
    st_met = p4.iloc[0][5]
    st_age = p4.iloc[0][6]
    st_dens = p4.iloc[0][7]
    st_radv = p4.iloc[0][8]
    st_logg = p4.iloc[0][9]

    features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

    pred_check = model_predictor.Predict_Simple([features_list])

    if pred_check == 4:
        return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}
    
    else:
        return False

def fivePlanets(true_df):
    p5 = true_df.loc[true_df['sy_pnum'] == 5]

    st_teff = p5.iloc[0][2]
    st_rad = p5.iloc[0][3]
    st_mass = p5.iloc[0][4]
    st_met = p5.iloc[0][5]
    st_age = p5.iloc[0][6]
    st_dens = p5.iloc[0][7]
    st_radv = p5.iloc[0][8]
    st_logg = p5.iloc[0][9]

    features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

    pred_check = model_predictor.Predict_Simple([features_list])

    if pred_check == 5:
        return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}
    
    else:
        return False

def sixPlanets(true_df):
    p6 = true_df.loc[true_df['sy_pnum'] == 6]

    st_teff = p6.iloc[0][2]
    st_rad = p6.iloc[0][3]
    st_mass = p6.iloc[0][4]
    st_met = p6.iloc[0][5]
    st_age = p6.iloc[0][6]
    st_dens = p6.iloc[0][7]
    st_radv = p6.iloc[0][8]
    st_logg = p6.iloc[0][9]

    features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

    pred_check = model_predictor.Predict_Simple([features_list])

    if pred_check == 6:
        return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}
    
    else:
        return False

# def sevenPlanets(true_df):
#     p7 = true_df.loc[true_df['sy_pnum'] == 7]

#     st_teff = p7.iloc[0][2]
#     st_rad = p7.iloc[0][3]
#     st_mass = p7.iloc[0][4]
#     st_met = p7.iloc[0][5]
#     st_age = p7.iloc[0][6]
#     st_dens = p7.iloc[0][7]
#     st_radv = p7.iloc[0][8]
#     st_logg = p7.iloc[0][9]

#     features_list = [st_teff, st_rad, st_mass, st_met, st_age, st_dens, st_radv, st_logg]

#     pred_check = model_predictor.Predict_Simple([features_list])

#     if pred_check == 7:
#         return {'st_teff': st_teff, 'st_rad': st_rad, 'st_mass': st_mass, 'st_met': st_met, 'st_age': st_age, 'st_dens': st_dens, 'st_radv': st_radv, 'st_logg': st_logg}

def allPlanets(true_df):
    return {'1': onePlanet(true_df), '2': twoPlanets(true_df),  '3': threePlanets(true_df),  '4': fourPlanets(true_df),  '5': fivePlanets(true_df),  '6': sixPlanets(true_df)}