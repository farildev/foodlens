import React, { useState, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { GiftedChat, InputToolbar, Composer, Send, Bubble } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import Fonts from "@/constants/Fonts";

const AssistantScreen = () => {
  const {colors} = useTheme();
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: "Salam! Necə kömək edə bilərəm?",
      createdAt: new Date(),
      user: { _id: 2, name: "AI Bot" },
    },
  ]);

  const onSend = useCallback((newMessages) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  }, []);

  const renderInputToolbar = (props) => {
    return <InputToolbar {...props} containerStyle={[styles.inputToolbar, {backgroundColor : colors.background, borderWidth : 1, borderColor : colors.placeholder, color : colors.text}]} />;
  };

  const renderComposer = (props) => {
    return <Composer {...props} textInputStyle={styles.textInput} />;
  };

  const renderBubble = (props) => {
    return <Bubble {...props}  wrapperStyle={{
      backgroundColor : colors.card,
      right: styles.userBubble,
      left: styles.aiBubble,
    }}
    textStyle={{
      color : colors.text,
      fontFamily : Fonts["600SemiBold"],  
      right: styles.userText,
      left: styles.aiText,
    }}  />
  }

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={18} color="white" />
        </TouchableOpacity>
      </Send>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor : colors.card}]}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{ _id: 1 }}
        placeholder="Mesaj yaz..."
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderBubble={renderBubble}
      />
    </View>
  );
};

export default AssistantScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputToolbar: {
    borderTopWidth: 0,
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    color: "black",
    fontSize: 14,
    paddingHorizontal: 10,
    textAlignVertical : 'auto',
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop : 4,
    alignSelf: "center",
  },
});
