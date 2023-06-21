import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native-appearance';

interface PasswordToggleProps {
  onToggle: () => void;
  showPassword: boolean;
  isFocused: boolean;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  onToggle,
  showPassword,
  isFocused,
}) => {
  if (!isFocused) {
    return null; 
  }

  return (
    <TouchableOpacity onPress={onToggle} style={styles.iconContainer}>
      <Ionicons
        name={showPassword ? 'eye' : 'eye-off'}
        size={24}
        color='gray'
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    bottom: 8,
    justifyContent: 'center',
  },
});

export default PasswordToggle;
