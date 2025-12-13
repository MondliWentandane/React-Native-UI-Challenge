import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// Types
interface StoryUser {
  id: string;
  name: string;
  avatar: any;
  isOnline: boolean;
}

interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: any;
  isOnline?: boolean;
  unreadCount?: number;
  isVoiceMessage?: boolean;
  isTyping?: boolean;
}

interface GroupChat {
  id: string;
  name: string;
  message: string;
  time: string;
  avatars: any[];
  memberCount: number;
  unreadCount?: number;
}

export default function App() {
  // Mock data - Replace with your actual data
  const storyUsers: StoryUser[] = [
    { id: '1', name: 'Mira', avatar: null, isOnline: true },
    { id: '2', name: 'Phill', avatar: null, isOnline: true },
    { id: '3', name: 'Mike', avatar: null, isOnline: false },
    { id: '4', name: 'Kierra', avatar: null, isOnline: false },
  ];

  const recentChats: Chat[] = [
    {
      id: '1',
      name: 'Phillip Geidt',
      message: 'Phillip is typing...',
      time: '11:34',
      avatar: null,
      isOnline: true,
      unreadCount: 6,
      isTyping: true,
    },
    {
      id: '2',
      name: 'Kierra from Match',
      message: 'Voice message',
      time: '11:05',
      avatar: null,
      unreadCount: 2,
      isVoiceMessage: true,
    },
    {
      id: '3',
      name: 'Mike Smith',
      message: 'Yes, put my name down in that list of the donations.',
      time: '10:31',
      avatar: null,
      isOnline: true,
    },
    {
      id: '4',
      name: 'Stacey Neighbor',
      message: 'Hi! Her mom already used it',
      time: '08:12',
      avatar: null,
    },
  ];

  const groupChats: GroupChat[] = [
    {
      id: '1',
      name: "Kevin's BP",
      message: 'Kate and Ann are typing...',
      time: '12:32',
      avatars: [null, null, null],
      memberCount: 9,
      unreadCount: 6,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chats</Text>
          <TouchableOpacity style={styles.profileButton}>
            {/* Replace with your profile image: 
                <Image source={require('./assets/images/profile.png')} style={styles.profileImage} /> 
            */}
            <View style={styles.profilePlaceholder}>
              <Text style={styles.profileText}>👤</Text>
            </View>
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>6</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Stories Section */}
        <View style={styles.storiesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesContent}
          >
            {storyUsers.map((user) => (
              <TouchableOpacity key={user.id} style={styles.storyItem}>
                <View style={styles.storyAvatarContainer}>
                  {/* Replace with actual avatar images:
                      <Image source={require(`./assets/images/avatars/${user.name.toLowerCase()}.png`)} style={styles.storyAvatar} />
                  */}
                  <View
                    style={[
                      styles.storyAvatar,
                      user.name === 'Mira' && styles.avatarOrange,
                      user.name === 'Phill' && styles.avatarPurple,
                      user.name === 'Mike' && styles.avatarGreen,
                      user.name === 'Kierra' && styles.avatarYellow,
                    ]}
                  >
                    <Text style={styles.avatarEmoji}>
                      {user.name === 'Mira' && '👧'}
                      {user.name === 'Phill' && '👨'}
                      {user.name === 'Mike' && '👦'}
                      {user.name === 'Kierra' && '👩'}
                    </Text>
                  </View>
                  {user.isOnline && <View style={styles.onlineIndicator} />}
                </View>
                <Text style={styles.storyName}>{user.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Chat Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Chat</Text>
          {recentChats.map((chat) => (
            <TouchableOpacity key={chat.id} style={styles.chatItem}>
              <View style={styles.chatAvatarContainer}>
                {/* Replace with actual avatar images:
                    <Image source={require('./assets/images/avatars/...')} style={styles.chatAvatar} />
                */}
                <View
                  style={[
                    styles.chatAvatar,
                    chat.name === 'Phillip Geidt' && styles.avatarPurple,
                    chat.name === 'Kierra from Match' && styles.avatarYellow,
                    chat.name === 'Mike Smith' && styles.avatarGreen,
                    chat.name === 'Stacey Neighbor' && styles.avatarPink,
                  ]}
                >
                  <Text style={styles.avatarEmoji}>
                    {chat.name === 'Phillip Geidt' && '👨'}
                    {chat.name === 'Kierra from Match' && '👩'}
                    {chat.name === 'Mike Smith' && '👦'}
                    {chat.name === 'Stacey Neighbor' && '👧'}
                  </Text>
                </View>
                {chat.isOnline && <View style={styles.onlineIndicatorChat} />}
              </View>

              <View style={styles.chatContent}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <View style={styles.messageRow}>
                  {chat.isVoiceMessage && (
                    <View style={styles.voiceIcon}>
                      <View style={styles.playButton} />
                    </View>
                  )}
                  <Text
                    style={[
                      styles.chatMessage,
                      chat.isTyping && styles.typingMessage,
                    ]}
                    numberOfLines={1}
                  >
                    {chat.message}
                  </Text>
                </View>
              </View>

              <View style={styles.chatRight}>
                <Text style={styles.chatTime}>{chat.time}</Text>
                {chat.unreadCount && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{chat.unreadCount}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Group Chat Section */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>Group Chat</Text>
          {groupChats.map((group) => (
            <TouchableOpacity key={group.id} style={styles.chatItem}>
              <View style={styles.groupAvatarContainer}>
                <View style={styles.groupAvatars}>
                  {/* Replace with actual group member avatars */}
                  <View style={[styles.miniAvatar, styles.avatarOrange, { top: 0, left: 0 }]}>
                    <Text style={styles.miniAvatarText}>👧</Text>
                  </View>
                  <View style={[styles.miniAvatar, styles.avatarPurple, { top: 0, right: 0 }]}>
                    <Text style={styles.miniAvatarText}>👨</Text>
                  </View>
                  <View style={[styles.miniAvatar, styles.avatarGreen, { bottom: 8, left: 6 }]}>
                    <Text style={styles.miniAvatarText}>👦</Text>
                  </View>
                  <View style={styles.memberCountBadge}>
                    <Text style={styles.memberCountText}>+{group.memberCount - 3}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.chatContent}>
                <Text style={styles.chatName}>{group.name}</Text>
                <Text style={[styles.chatMessage, styles.typingMessage]} numberOfLines={1}>
                  {group.message}
                </Text>
              </View>

              <View style={styles.chatRight}>
                <Text style={styles.chatTime}>{group.time}</Text>
                {group.unreadCount && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{group.unreadCount}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0E8',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#D4E4D4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#C8D8C8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 28,
    color: '#333',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  profileButton: {
    position: 'relative',
  },
  profilePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#B8C8B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#D4E84C',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  notificationText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333',
  },
  storiesContainer: {
    backgroundColor: '#D4E4D4',
    paddingVertical: 15,
  },
  storiesContent: {
    paddingHorizontal: 20,
    gap: 15,
  },
  storyItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 20,
    minWidth: 85,
  },
  storyAvatarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  storyAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarOrange: {
    backgroundColor: '#FFD4B8',
  },
  avatarPurple: {
    backgroundColor: '#E0D4FF',
  },
  avatarGreen: {
    backgroundColor: '#D4FFE0',
  },
  avatarYellow: {
    backgroundColor: '#FFF4D4',
  },
  avatarPink: {
    backgroundColor: '#FFD4E8',
  },
  avatarEmoji: {
    fontSize: 28,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  storyName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  section: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    marginTop: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  lastSection: {
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 12,
  },
  chatAvatarContainer: {
    position: 'relative',
  },
  chatAvatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineIndicatorChat: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 3,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  voiceIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 0,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderLeftColor: '#FFF',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    marginLeft: 2,
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  typingMessage: {
    color: '#999',
    fontStyle: 'italic',
  },
  chatRight: {
    alignItems: 'flex-end',
    gap: 6,
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadBadge: {
    backgroundColor: '#D4E84C',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333',
  },
  groupAvatarContainer: {
    width: 55,
    height: 55,
  },
  groupAvatars: {
    position: 'relative',
    width: 55,
    height: 55,
  },
  miniAvatar: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  miniAvatarText: {
    fontSize: 14,
  },
  memberCountBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#B8E0FF',
    borderRadius: 10,
    minWidth: 28,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  memberCountText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#333',
  },
});