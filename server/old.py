# This file is where I keep old code that I may need in the future. It's for my reference.

# I'm keeping this method here because I may go back to this method or use it at some future date.
def get_data_based_on_age_old(self, post_data):
    post_data['tableData'].pop(0)
    df = pd.DataFrame(post_data['tableData'], columns=[
        'age', 'division_name', 'department_name', 'class_name', 'title', 'review_text', 'rating', 'recommend_index'])
    df['age'].astype(int)
    age_data_set = df[(df['age'] >= int(post_data['ageOne'])) & (
        df['age'] <= int(post_data['ageTwo']))]
    return data.build_table(age_data_set, df_sorted_by_column)
