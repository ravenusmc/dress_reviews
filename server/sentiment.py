# importing supporting libraries
import numpy as np
import pandas as pd
import json
import datetime
from textblob import TextBlob

# This class will deal with a majority of the data processing that this project will
# handle.


class Sentiment():

    def __init__(self):
        self.data = pd.read_csv('./data/dresses.csv')

    def drop_na(self):
        return self.data.dropna()

    def sentiment_by_rating(self):
        exploring = Sentiment()
        df = exploring.drop_na()
        sentiment_data = []
        columns = ['rating', 'Sentiment']
        sentiment_data.append(columns)
        ratings = [1, 2, 3, 4, 5]
        for rating in ratings:
            rows = []
            df_sorted_by_rating = df[(df['rating'] == rating)]
            average_sentiment_formatted = exploring.get_sentiment(
                df_sorted_by_rating, exploring)
            rows.append(rating)
            rows.append(average_sentiment_formatted)
            sentiment_data.append(rows)
        print(sentiment_data)

    def get_sentiment(self, df_sorted_by_rating, obj):
        sentiment_by_rating = []
        for text in df_sorted_by_rating['review_text']:
            text_ready_for_analysis = TextBlob(text)
            for sentence in text_ready_for_analysis.sentences:
                sentence_sentiment = sentence.sentiment[0]
                sentiment_by_rating.append(sentence_sentiment)
        average_sentiment = sum(sentiment_by_rating)/len(sentiment_by_rating)
        average_sentiment_formatted = float(format(average_sentiment, '.5f'))
        return average_sentiment_formatted

    def get_word_count(self):
        exploring = Sentiment()
        df = exploring.drop_na()
        ratings = [1, 2, 3, 4, 5]
        # Wow...this code is the same as two methods above...maybe write a new method???
        for rating in ratings:
            rows = []
            df_sorted_by_rating = df[(df['rating'] == rating)]
            exploring.build_word_list(df_sorted_by_rating)
            # exploring.clean_word_list()
    
    def build_word_list(self, df_sorted_by_rating):
        print(df_sorted_by_rating.head())

    def clean_word_list(self, word_list, speech):
        word_and_count = {}
        len_count = 0
        # looping through the list
        while len_count < len(word_list):
            word_count = 0
            # I assign the current_word to the current position of the word_count counter
            current_word = word_list[len_count].lower()
            # I then loop through the words again seeing is certain conditions are met.
            for word in word_list:
                word = word.lower()
                if (current_word == word and current_word != 'and' and current_word != 'the' and current_word != 'The'
                    and current_word != 'on' and current_word != 'of' and current_word != 'But' and current_word != 'from' and current_word != 'any'
                    and current_word != 'nor' and current_word != 'this' and current_word != 'is' and current_word != 'by' and current_word != 'it'
                    and current_word != 'take' and current_word != 'that' and current_word != 'but' and current_word != 'for'
                    and current_word != 'these' and current_word != 'can' and current_word != 'or' and current_word != 'are'
                    and current_word != 'did' and current_word != 'who' and current_word != 'say' and current_word != 'It'
                    and current_word != 'rather' and current_word != 'in' and current_word != 'thus' and current_word != 'as'
                    and current_word != 'do' and current_word != 'so' and current_word != 'will' and current_word != 'a'
                    and current_word != 'not' and current_word != 'here' and current_word != 'whether' and current_word != 'Now'
                    and current_word != 'altogether' and current_word != 'which' and current_word != 'to' and current_word != 'met'
                    and current_word != 'what' and current_word != 'those' and current_word != 'always' and current_word != 'So'
                    and current_word != 'Again' and current_word != 'And' and current_word != 'As' and current_word != 'Go'
                    and current_word != 'well' and current_word != 'have' and current_word != 'has' and current_word != 'all'
                    and current_word != 'must' and current_word != 'i' and current_word != 'my' and current_word != 'like'
                    and current_word != 'me' and current_word != 'now' and current_word != 'shall' and current_word != 'with'
                    and current_word != 'ever' and current_word != 'also' and current_word != 'be' and current_word != 'more'
                    and current_word != 'upon' and current_word != 'no' and current_word != 'most' and current_word != 'could'
                    and current_word != 'should' and current_word != 'come' and current_word != 'during' and current_word != 'been'
                    and current_word != 'among' and current_word != 'toward' and current_word != 'there' and current_word != 'only'
                    and current_word != 'become' and current_word != 'may' and current_word != 'need' and current_word != 'between'
                        and current_word != 'every' and current_word != 'other' and current_word != 'yet' and current_word != 'let'):
                    word_count += 1
                    if (speech == self.GettysburgAddress and word_count > 2):
                        word_and_count[current_word] = word_count
                    elif (speech == self.dreamSpeech and word_count > 4):
                        word_and_count[current_word] = word_count
                    elif (speech == self.military and word_count > 3):
                        word_and_count[current_word] = word_count
            len_count += 1
        return word_and_count


test = Sentiment()
test.get_word_count()
