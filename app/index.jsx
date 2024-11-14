import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView} from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className = "bg-yellow-500 h-full">
      <ScrollView contentContainerStyle = {{height:'100%'}}>
        <View className = "w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.Tima}
            className = "w-[130px] h-[84px] mt-7"
            resizeMode="contain"
          />

          <View className = "relative mt-4 ">
            <Text className = "text-4xl text-black font-bold text-justify">
            Master Your {' '}
                <Text className = "text-pink-500">Minutes</Text>
                , Achieve Your {' '}
                <Text className = "text-indigo-500">Goals</Text>
                .
            </Text>

          </View>
          
          
          <Image 
            source={images.Time}
            className = "max-2-[380px] w-full h-[200px]"
            resizeMode="contain"
          />

          <View className = "relative mb-7 ">
            <Text className = "text-sm text-gray-700 font-bold text-justify">
              Make Every Moment Count.
            </Text>

          </View>

          <CustomButton 
            title= "Get Started"
            handlePress={() => {router.push('/sign-in')}}
            containerStyle= "w-full mt-1"
          />
        </View>

      </ScrollView>
      <StatusBar  backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}

