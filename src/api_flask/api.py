from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
from transformers import pipeline

# Create a Flask application
app = Flask(__name__)

# Enable CORS (Cross-Origin Resource Sharing) for the app
CORS(app)

# Function to analyze sentiment using TextBlob
def analyze_sentiment(text):
    blob = TextBlob(text)
    sentiment = "positive" if blob.sentiment.polarity >= 0 else "negative"
    return sentiment

# Function to translate text from French to English using transformers
def translate_text(text):
    # Create a translation pipeline for English to French
    translator = pipeline(task="translation", model="Helsinki-NLP/opus-mt-fr-en")
    
    # Translate the input text
    translated_text = translator(text, max_length=50)[0]['translation_text']
    return translated_text

# Function to calculate points based on positive elements
def calculate_points(adjectives, is_long, sentiment):
    if sentiment == "positive":
        if len(adjectives) == 1:
            return 5
        elif len(adjectives) > 1 and not is_long:
            return 10
        elif len(adjectives) > 1 and is_long:
            return 15
        else:
            return 0
    
    elif sentiment == "negative":
        return 0
    
    else:
        return 'error'

# Define a route for sentiment analysis and translation
@app.route("/analyze_sentiment_and_translate", methods=["POST"])
def analyze_sentiment_and_translate():
    try:
        # Extract the JSON data from the POST request
        data = request.get_json()
        
        # Get the input sentence from the JSON data
        sentence = data.get("sentence", "")
        
        # Print the input sentence
        print("Input Sentence:", sentence)

        # Analyze sentiment using TextBlob
        sentiment = analyze_sentiment(sentence)
        
        # Translate the input sentence to English
        translated_sentence = translate_text(sentence)

        # Analyze sentiment using TextBlob for the translated sentence
        translated_sentiment = analyze_sentiment(translated_sentence)

        # Calculate points based on positive elements
        adjectives = ["positive", "element"]  # Replace this with actual adjectives from your data
        is_long = len(sentence.split()) > 5  # Replace 5 with an appropriate threshold for length
        
        points = calculate_points(adjectives, is_long, translated_sentiment)
        
        # Print the translated sentence and sentiment
        print("Translated Sentence:", translated_sentence)
        print("Sentiment of translated sentence:", translated_sentiment)
        print("Points for positive elements:", points)

        # Return the sentiment analysis result, the translated sentence, and points in JSON format
        return jsonify({"sentiment": translated_sentiment, "translated_sentence": translated_sentence, "points": points})
    
    except Exception as e:
        # Print an error message if an exception occurs
        print(f"An error occurred: {str(e)}")
        
        # Return an error response in JSON format
        return jsonify({"error": "Internal Server Error"}), 500

# Run the Flask app on port 3002 when executed directly
if __name__ == "__main__":
    app.run(host="192.168.1.30", port=3002)
    