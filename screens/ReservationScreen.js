// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Calendar } from 'react-native-calendars';
// import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// export default function ReservationScreen() {
//   const [parkingLocation, setParkingLocation] = useState('');
//   const [vehicleType, setVehicleType] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [timeSlot, setTimeSlot] = useState('');
//   const [parkingSpot, setParkingSpot] = useState('');
//   const [reservedSlots, setReservedSlots] = useState({});
//   const [calendarVisible, setCalendarVisible] = useState(false);
//   const [locationPickerVisible, setLocationPickerVisible] = useState(false);
//   const [vehiclePickerVisible, setVehiclePickerVisible] = useState(false);
//   const [timePickerVisible, setTimePickerVisible] = useState(false);
//   const [reservationModalVisible, setReservationModalVisible] = useState(false);

//   const parkingLocations = [
//     { label: 'Select Parking Location', value: '' },
//     { label: 'Yerevan Mall', value: 'yerevan_mall' },
//     { label: 'Big Market', value: 'big_market' },
//     { label: 'Russian Mall', value: 'russian_mall' },
//     { label: 'University', value: 'university' },
//   ];

//   const parkingSpots = {
//     yerevan_mall: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6','Spot 7','Spot 8','Spot 9','Spot 10'],
//     big_market: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6','Spot 7','Spot 8','Spot 9','Spot 10'],
//     russian_mall: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6','Spot 7','Spot 8','Spot 9','Spot 10'],
//     university: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6','Spot 7','Spot 8','Spot 9','Spot 10'],
//   };

//   const vehicleTypes = [
//     { label: 'Select Vehicle Type', value: '' },
//     { label: 'Car', value: 'car' },
//     { label: 'Bike', value: 'bike' },
//   ];

//   const timeOptions = [
//     { label: 'Select a time', value: '' },
//     { label: '08:00', value: '08:00' },
//     { label: '09:00', value: '09:00' },
//     { label: '10:00', value: '10:00' },
//     { label: '11:00', value: '11:00' },
//     { label: '12:00', value: '12:00' },
//     { label: '13:00', value: '13:00' },
//     { label: '14:00', value: '14:00' },
//     { label: '15:00', value: '15:00' },
//     { label: '16:00', value: '16:00' },
//     { label: '17:00', value: '17:00' },
//     { label: '18:00', value: '18:00' },
//   ];

//   const currentKey = parkingLocation && selectedDate && timeSlot && parkingSpot
//     ? `${parkingLocation}_${selectedDate}_${timeSlot}_${parkingSpot}`
//     : null;
//   const isSlotReserved = currentKey && reservedSlots[currentKey];

//   const handleConfirmReservation = () => {
//     if (!parkingLocation || !vehicleType || !selectedDate || !timeSlot || !parkingSpot) {
//       alert('Please select all options: location, vehicle, date, time, and spot.');
//       return;
//     }
//     if (reservedSlots[currentKey]) {
//       alert('This slot is already reserved.');
//       return;
//     }

//     setReservedSlots((prev) => ({ ...prev, [currentKey]: vehicleType }));
//     setReservationModalVisible(true);
//   };

//   const handleCloseModal = () => {
//     setReservationModalVisible(false);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Reserve Parking Space</Text>
//         <Text style={styles.subtitle}>Fill in the details to secure your spot</Text>
//       </View>

//       {/* Location Picker */}
//       <TouchableOpacity
//         onPress={() => setLocationPickerVisible(true)}
//         style={styles.inputField}
//       >
//         <MaterialCommunityIcons name="map-marker" size={24} color="#6C5CE7" />
//         <View style={styles.inputTextContainer}>
//           <Text style={styles.inputLabel}>Parking Location</Text>
//           <Text style={styles.inputValue}>
//             {parkingLocation ? parkingLocations.find(loc => loc.value === parkingLocation)?.label : 'Select location'}
//           </Text>
//         </View>
//         <MaterialIcons name="chevron-right" size={24} color="#B2BEC3" />
//       </TouchableOpacity>

//       {/* Vehicle Type Picker */}
//       <TouchableOpacity
//         onPress={() => setVehiclePickerVisible(true)}
//         style={styles.inputField}
//       >
//         {vehicleType === 'car' ? (
//           <MaterialCommunityIcons name="car" size={24} color="#6C5CE7" />
//         ) : (
//           <MaterialCommunityIcons name="motorbike" size={24} color="#6C5CE7" />
//         )}
//         <View style={styles.inputTextContainer}>
//           <Text style={styles.inputLabel}>Vehicle Type</Text>
//           <Text style={styles.inputValue}>
//             {vehicleType ? vehicleTypes.find(v => v.value === vehicleType)?.label : 'Select vehicle'}
//           </Text>
//         </View>
//         <MaterialIcons name="chevron-right" size={24} color="#B2BEC3" />
//       </TouchableOpacity>

//       {/* Date Picker */}
//       <TouchableOpacity
//         onPress={() => setCalendarVisible(true)}
//         style={styles.inputField}
//       >
//         <MaterialIcons name="calendar-today" size={24} color="#6C5CE7" />
//         <View style={styles.inputTextContainer}>
//           <Text style={styles.inputLabel}>Date</Text>
//           <Text style={styles.inputValue}>
//             {selectedDate ? selectedDate : 'Select date'}
//           </Text>
//         </View>
//         <MaterialIcons name="chevron-right" size={24} color="#B2BEC3" />
//       </TouchableOpacity>

//       {/* Time Picker */}
//       <TouchableOpacity
//         onPress={() => setTimePickerVisible(true)}
//         style={styles.inputField}
//       >
//         <MaterialIcons name="access-time" size={24} color="#6C5CE7" />
//         <View style={styles.inputTextContainer}>
//           <Text style={styles.inputLabel}>Time Slot</Text>
//           <Text style={styles.inputValue}>
//             {timeSlot ? timeSlot : 'Select time'}
//           </Text>
//         </View>
//         <MaterialIcons name="chevron-right" size={24} color="#B2BEC3" />
//       </TouchableOpacity>

//       {/* Parking Spots */}
//       {parkingLocation && selectedDate && timeSlot && (
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Available Parking Spots</Text>
//           <View style={styles.spotGrid}>
//             {parkingSpots[parkingLocation].map((spot) => (
//               <TouchableOpacity
//                 key={spot}
//                 style={[
//                   styles.spotButton,
//                   parkingSpot === spot && !reservedSlots[`${parkingLocation}_${selectedDate}_${timeSlot}_${spot}`]
//                     ? styles.selectedSpot
//                     : reservedSlots[`${parkingLocation}_${selectedDate}_${timeSlot}_${spot}`]
//                     ? styles.reservedSpot
//                     : null,
//                 ]}
//                 onPress={() => {
//                   if (!reservedSlots[`${parkingLocation}_${selectedDate}_${timeSlot}_${spot}`]) {
//                     setParkingSpot(spot);
//                   }
//                 }}
//               >
//                 {reservedSlots[`${parkingLocation}_${selectedDate}_${timeSlot}_${spot}`] === 'car' ? (
//                   <MaterialCommunityIcons name="car" size={32} color="#2D3436" />
//                 ) : reservedSlots[`${parkingLocation}_${selectedDate}_${timeSlot}_${spot}`] === 'bike' ? (
//                   <MaterialCommunityIcons name="motorbike" size={32} color="#2D3436" />
//                 ) : (
//                   <Text style={styles.spotText}>{spot}</Text>
//                 )}
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       )}

//       {/* Parking Info */}
//       <View style={styles.infoCard}>
//         <Text style={styles.infoTitle}>Parking Information</Text>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="attach-money" size={20} color="#6C5CE7" />
//           <Text style={styles.infoLabel}>Rate:</Text>
//           <Text style={styles.infoValue}>$2.50/hour</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="local-parking" size={20} color="#6C5CE7" />
//           <Text style={styles.infoLabel}>Available Spots:</Text>
//           <Text style={styles.infoValue}>24 spots</Text>
//         </View>
//         <View style={styles.infoRow}>
//           <MaterialIcons name="star" size={20} color="#6C5CE7" />
//           <Text style={styles.infoLabel}>Amenities:</Text>
//           <Text style={styles.infoValue}>EV Charging, Security</Text>
//         </View>
//       </View>

//       {/* Confirm Button */}
//       <TouchableOpacity 
//         style={[styles.confirmButton, isSlotReserved && styles.disabledButton]}
//         onPress={handleConfirmReservation}
//         disabled={isSlotReserved}
//       >
//         <Text style={styles.confirmButtonText}>CONFIRM RESERVATION</Text>
//       </TouchableOpacity>

//       {isSlotReserved && (
//         <View style={styles.warningContainer}>
//           <MaterialIcons name="error-outline" size={20} color="#F44336" />
//           <Text style={styles.warningText}>This slot is already reserved</Text>
//         </View>
//       )}

//       <Text style={styles.footerText}>Free cancellation up to hour before your reserved time.</Text>

//       {/* Modals */}
//       <Modal
//         visible={locationPickerVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setLocationPickerVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={parkingLocation}
//               onValueChange={(itemValue) => {
//                 setParkingLocation(itemValue);
//                 setLocationPickerVisible(false);
//                 setParkingSpot('');
//               }}
//               style={styles.picker}
//             >
//               {parkingLocations.map((option) => (
//                 <Picker.Item
//                   key={option.value}
//                   label={option.label}
//                   value={option.value}
//                 />
//               ))}
//             </Picker>
//             <Button title="Close" onPress={() => setLocationPickerVisible(false)} />
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         visible={vehiclePickerVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setVehiclePickerVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={vehicleType}
//               onValueChange={(itemValue) => {
//                 setVehicleType(itemValue);
//                 setVehiclePickerVisible(false);
//               }}
//               style={styles.picker}
//             >
//               {vehicleTypes.map((option) => (
//                 <Picker.Item
//                   key={option.value}
//                   label={option.label}
//                   value={option.value}
//                 />
//               ))}
//             </Picker>
//             <Button title="Close" onPress={() => setVehiclePickerVisible(false)} />
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         visible={calendarVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setCalendarVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.calendarContainer}>
//             <Calendar
//               onDayPress={(day) => {
//                 setSelectedDate(day.dateString);
//                 setCalendarVisible(false);
//               }}
//               markedDates={
//                 selectedDate
//                   ? {
//                       [selectedDate]: {
//                         selected: true,
//                         marked: true,
//                         selectedColor: '#6C5CE7',
//                       },
//                     }
//                   : {}
//               }
//             />
//             <Button title="Close" onPress={() => setCalendarVisible(false)} />
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         visible={timePickerVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setTimePickerVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.pickerContainer}>
//             <Picker
//               selectedValue={timeSlot}
//               onValueChange={(itemValue) => {
//                 setTimeSlot(itemValue);
//                 setTimePickerVisible(false);
//               }}
//               style={styles.picker}
//             >
//               {timeOptions.map((option) => (
//                 <Picker.Item
//                   key={option.value}
//                   label={option.label}
//                   value={option.value}
//                 />
//               ))}
//             </Picker>
//             <Button title="Close" onPress={() => setTimePickerVisible(false)} />
//           </View>
//         </View>
//       </Modal>

//       <Modal
//         visible={reservationModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={handleCloseModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.confirmationContainer}>
//             <MaterialIcons name="check-circle" size={60} color="#4CAF50" style={styles.confirmationIcon} />
//             <Text style={styles.confirmationTitle}>Reservation Confirmed</Text>
            
//             <View style={styles.confirmationDetail}>
//               <Text style={styles.confirmationLabel}>Location:</Text>
//               <Text style={styles.confirmationValue}>
//                 {parkingLocations.find(loc => loc.value === parkingLocation)?.label}
//               </Text>
//             </View>
            
//             <View style={styles.confirmationDetail}>
//               <Text style={styles.confirmationLabel}>Vehicle:</Text>
//               <Text style={styles.confirmationValue}>
//                 {vehicleTypes.find(v => v.value === vehicleType)?.label}
//               </Text>
//             </View>
            
//             <View style={styles.confirmationDetail}>
//               <Text style={styles.confirmationLabel}>Date:</Text>
//               <Text style={styles.confirmationValue}>{selectedDate}</Text>
//             </View>
            
//             <View style={styles.confirmationDetail}>
//               <Text style={styles.confirmationLabel}>Time:</Text>
//               <Text style={styles.confirmationValue}>{timeSlot}</Text>
//             </View>
            
//             <View style={styles.confirmationDetail}>
//               <Text style={styles.confirmationLabel}>Spot:</Text>
//               <Text style={styles.confirmationValue}>{parkingSpot}</Text>
//             </View>
            
//             <TouchableOpacity 
//               style={styles.closeButton}
//               onPress={handleCloseModal}
//             >
//               <Text style={styles.closeButtonText}>DONE</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F6FA',
//   },
//   header: {
//     padding: 24,
//     paddingBottom: 16,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2D3436',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#636E72',
//     marginTop: 4,
//   },
//   inputField: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     padding: 16,
//     marginHorizontal: 16,
//     marginBottom: 12,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   inputTextContainer: {
//     flex: 1,
//     marginLeft: 12,
//   },
//   inputLabel: {
//     fontSize: 12,
//     color: '#636E72',
//   },
//   inputValue: {
//     fontSize: 16,
//     color: '#2D3436',
//     fontWeight: '500',
//     marginTop: 4,
//   },
//   section: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 20,
//     margin: 16,
//     marginTop: 8,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3436',
//     marginBottom: 8,
//   },
//   spotGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   spotButton: {
//     width: '18%',
//     aspectRatio: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F1F1F1',
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   spotText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#2D3436',
//   },
//   selectedSpot: {
//     backgroundColor: '#6C5CE7',
//   },
//   reservedSpot: {
//     backgroundColor: '#FFCCCC',
//   },
//   infoCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     padding: 20,
//     margin: 16,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//   },
//   infoTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2D3436',
//     marginBottom: 16,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   infoLabel: {
//     fontSize: 14,
//     color: '#636E72',
//     marginLeft: 8,
//     marginRight: 4,
//   },
//   infoValue: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#2D3436',
//   },
//   confirmButton: {
//     backgroundColor: '#e91b32',
//     padding: 18,
//     borderRadius: 12,
//     alignItems: 'center',
//     margin: 16,
//     marginTop: 8,
//   },
//   disabledButton: {
//     backgroundColor: '#B2BEC3',
//   },
//   confirmButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   warningContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 8,
//   },
//   warningText: {
//     color: '#F44336',
//     marginLeft: 8,
//     fontSize: 14,
//   },
//   footerText: {
//     textAlign: 'center',
//     color: '#636E72',
//     fontSize: 12,
//     marginTop: 24,
//     marginHorizontal: 24,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   pickerContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 12,
//     margin: 20,
//   },
//   calendarContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 20,
//     borderRadius: 12,
//     margin: 20,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//   },
//   confirmationContainer: {
//     backgroundColor: '#FFFFFF',
//     padding: 24,
//     margin: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   confirmationIcon: {
//     marginBottom: 16,
//   },
//   confirmationTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#2D3436',
//     marginBottom: 24,
//   },
//   confirmationDetail: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: 12,
//   },
//   confirmationLabel: {
//     fontSize: 16,
//     color: '#636E72',
//   },
//   confirmationValue: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#2D3436',
//   },
//   closeButton: {
//     backgroundColor: '#6C5CE7',
//     padding: 16,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 24,
//   },
//   closeButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: '700',
//   },
// });





// // screens/ReservationScreen.js
// import React, { useState } from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import DateTimePicker from '@react-native-community/datetimepicker'; // Date picker for selecting the reservation date
// import { Picker } from '@react-native-picker/picker'; // For selecting vehicle type

// function ReservationScreen({ navigation }) {
//   const [selectedVehicle, setSelectedVehicle] = useState('car');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [spots, setSpots] = useState(['A1', 'A2', 'B1', 'B2']); // Sample spots
//   const [selectedSpot, setSelectedSpot] = useState(null);

//   const onDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || new Date();
//     setSelectedDate(currentDate);
//   };

//   const handleReservation = () => {
//     if (selectedSpot) {
//       alert(`Parking spot ${selectedSpot} reserved for your ${selectedVehicle} on ${selectedDate.toDateString()}`);
//       navigation.goBack(); // Go back after reservation
//     } else {
//       alert('Please select a parking spot.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose your vehicle</Text>
//       <Picker
//         selectedValue={selectedVehicle}
//         onValueChange={(itemValue) => setSelectedVehicle(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Car" value="car" />
//         <Picker.Item label="Bike" value="bike" />
//       </Picker>

//       <Text style={styles.title}>Choose reservation date</Text>
//       <DateTimePicker
//         value={selectedDate}
//         mode="date"
//         display="default"
//         onChange={onDateChange}
//       />

//       <Text style={styles.title}>Available Spots</Text>
//       <View style={styles.spotsContainer}>
//         {spots.map((spot) => (
//           <TouchableOpacity
//             key={spot}
//             style={[
//               styles.spotButton,
//               selectedSpot === spot && styles.selectedSpot,
//             ]}
//             onPress={() => setSelectedSpot(spot)}
//           >
//             <MaterialIcons name="local-parking" size={24} color="#FFF" />
//             <Text style={styles.spotText}>{spot}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <Button title="Reserve" onPress={handleReservation} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   picker: {
//     marginVertical: 10,
//   },
//   spotsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginVertical: 10,
//   },
//   spotButton: {
//     backgroundColor: '#e91b32',
//     margin: 5,
//     padding: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   selectedSpot: {
//     backgroundColor: '#34D399',
//   },
//   spotText: {
//     color: '#FFF',
//   },
// });

// export default ReservationScreen;

// import React, { useState } from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker'; // For selecting vehicle type, place, and time
// import { Calendar } from 'react-native-calendars'; // Calendar component

// function ReservationScreen({ navigation }) {
//   const [selectedVehicle, setSelectedVehicle] = useState('car');
//   const [selectedPlace, setSelectedPlace] = useState('Place 1');
//   const [selectedTime, setSelectedTime] = useState('10:00');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility
//   const [spots, setSpots] = useState(['A1', 'A2', 'B1', 'B2']); // Sample spots
//   const [selectedSpot, setSelectedSpot] = useState(null);

//   const onDayPress = (day) => {
//     setSelectedDate(day.dateString); // Update selected date when a day is pressed on the calendar
//     setShowCalendar(false); // Hide the calendar after a date is selected
//   };

//   const handleReservation = () => {
//     if (selectedSpot) {
//       alert(`Parking spot ${selectedSpot} reserved for your ${selectedVehicle} at ${selectedPlace} on ${selectedDate} at ${selectedTime}`);
//       navigation.goBack(); // Go back after reservation
//     } else {
//       alert('Please select a parking spot.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose your vehicle</Text>
//       <Picker
//         selectedValue={selectedVehicle}
//         onValueChange={(itemValue) => setSelectedVehicle(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Car" value="car" />
//         <Picker.Item label="Bike" value="bike" />
//       </Picker>

//       <Text style={styles.title}>Choose a place</Text>
//       <Picker
//         selectedValue={selectedPlace}
//         onValueChange={(itemValue) => setSelectedPlace(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="Place 1" value="Place 1" />
//         <Picker.Item label="Place 2" value="Place 2" />
//         <Picker.Item label="Place 3" value="Place 3" />
//       </Picker>

//       <Text style={styles.title}>Choose a time</Text>
//       <Picker
//         selectedValue={selectedTime}
//         onValueChange={(itemValue) => setSelectedTime(itemValue)}
//         style={styles.picker}
//       >
//         <Picker.Item label="10:00 AM" value="10:00" />
//         <Picker.Item label="11:00 AM" value="11:00" />
//         <Picker.Item label="12:00 PM" value="12:00" />
//         <Picker.Item label="1:00 PM" value="13:00" />
//         <Picker.Item label="2:00 PM" value="14:00" />
//       </Picker>

//       <Text style={styles.title}>Choose reservation date</Text>
//       <TouchableOpacity onPress={() => setShowCalendar(true)}>
//         <Text style={styles.dateText}>
//           {selectedDate ? new Date(selectedDate).toLocaleDateString() : "Select a date"}
//         </Text>
//       </TouchableOpacity>

//       {showCalendar && (
//         <Calendar
//           onDayPress={onDayPress}
//           markedDates={{
//             [selectedDate]: {
//               selected: true,
//               selectedColor: 'blue',
//             },
//           }}
//           theme={{
//             todayTextColor: 'red',
//             selectedDayBackgroundColor: 'blue',
//             selectedDayTextColor: 'white',
//           }}
//         />
//       )}

//       <Text style={styles.title}>Available Spots</Text>
//       <View style={styles.spotsContainer}>
//         {spots.map((spot) => (
//           <View
//             key={spot}
//             style={[
//               styles.spotButton,
//               selectedSpot === spot && styles.selectedSpot,
//             ]}
//             onTouchEnd={() => setSelectedSpot(spot)}
//           >
//             <MaterialIcons name="local-parking" size={24} color="#FFF" />
//             <Text style={styles.spotText}>{spot}</Text>
//           </View>
//         ))}
//       </View>

//       <Button title="Reserve" onPress={handleReservation} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   picker: {
//     marginVertical: 10,
//   },
//   dateText: {
//     fontSize: 18,
//     color: '#007AFF',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   spotsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginVertical: 10,
//   },
//   spotButton: {
//     backgroundColor: '#e91b32',
//     margin: 5,
//     padding: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   selectedSpot: {
//     backgroundColor: '#34D399',
//   },
//   spotText: {
//     color: '#FFF',
//   },
// });

// export default ReservationScreen;

// import React, { useState } from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { Picker } from '@react-native-picker/picker'; // For selecting vehicle type, place, and time
// import { Calendar } from 'react-native-calendars'; // Calendar component

// function ReservationScreen({ navigation }) {
//   const parkingLocations = [
//     { label: 'Select Parking Location', value: '' },
//     { label: 'Yerevan Mall', value: 'yerevan_mall' },
//     { label: 'Big Market', value: 'big_market' },
//     { label: 'Russian Mall', value: 'russian_mall' },
//     { label: 'University', value: 'university' },
//   ];

//   const parkingSpots = {
//     yerevan_mall: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6', 'Spot 7', 'Spot 8', 'Spot 9', 'Spot 10'],
//     big_market: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6', 'Spot 7', 'Spot 8', 'Spot 9', 'Spot 10'],
//     russian_mall: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6', 'Spot 7', 'Spot 8', 'Spot 9', 'Spot 10'],
//     university: ['Spot 1', 'Spot 2', 'Spot 3', 'Spot 4', 'Spot 5', 'Spot 6', 'Spot 7', 'Spot 8', 'Spot 9', 'Spot 10'],
//   };

//   const vehicleTypes = [
//     { label: 'Select Vehicle Type', value: '' },
//     { label: 'Car', value: 'car' },
//     { label: 'Bike', value: 'bike' },
//   ];

//   const timeOptions = [
//     { label: 'Select a time', value: '' },
//     { label: '08:00', value: '08:00' },
//     { label: '09:00', value: '09:00' },
//     { label: '10:00', value: '10:00' },
//     { label: '11:00', value: '11:00' },
//     { label: '12:00', value: '12:00' },
//     { label: '13:00', value: '13:00' },
//     { label: '14:00', value: '14:00' },
//     { label: '15:00', value: '15:00' },
//     { label: '16:00', value: '16:00' },
//     { label: '17:00', value: '17:00' },
//     { label: '18:00', value: '18:00' },
//   ];

//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [selectedSpot, setSelectedSpot] = useState('');
//   const [selectedVehicle, setSelectedVehicle] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showCalendar, setShowCalendar] = useState(false); // State to toggle calendar visibility
//   const [availableSpots, setAvailableSpots] = useState([]); // To store the available spots based on location
//   const [reservedSpots, setReservedSpots] = useState({}); // To track reserved spots
  
//   // Update available spots when the location changes
//   const onLocationChange = (value) => {
//     setSelectedLocation(value);
//     setAvailableSpots(parkingSpots[value] || []);
//     setSelectedSpot(''); // Reset selected spot when location changes
//   };

//   const onDayPress = (day) => {
//     setSelectedDate(day.dateString); // Update selected date when a day is pressed on the calendar
//     setShowCalendar(false); // Hide the calendar after a date is selected
//   };

//   const handleReservation = () => {
//     if (selectedLocation && selectedSpot && selectedVehicle && selectedTime && selectedDate) {
//       // Mark the spot as reserved
//       setReservedSpots(prevReservedSpots => ({
//         ...prevReservedSpots,
//         [selectedSpot]: { vehicle: selectedVehicle, time: selectedTime, date: selectedDate },
//       }));
//       alert(`Reservation confirmed!\nLocation: ${selectedLocation}\nSpot: ${selectedSpot}\nVehicle: ${selectedVehicle}\nTime: ${selectedTime}\nDate: ${selectedDate}`);
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Choose Parking Location</Text>
//       <Picker
//         selectedValue={selectedLocation}
//         onValueChange={onLocationChange}
//         style={styles.picker}
//       >
//         {parkingLocations.map((location) => (
//           <Picker.Item key={location.value} label={location.label} value={location.value} />
//         ))}
//       </Picker>

//       <Text style={styles.title}>Choose Parking Spot</Text>
//       <Picker
//         selectedValue={selectedSpot}
//         onValueChange={(itemValue) => setSelectedSpot(itemValue)}
//         style={styles.picker}
//         enabled={selectedLocation !== ''} // Only enable if location is selected
//       >
//         {availableSpots.map((spot) => (
//           <Picker.Item 
//             key={spot} 
//             label={
//               reservedSpots[spot] ? 
//               `${spot} (Taken by ${reservedSpots[spot].vehicle})` : spot
//             } 
//             value={spot} 
//             enabled={!reservedSpots[spot]} // Disable if the spot is reserved
//           />
//         ))}
//       </Picker>

//       <Text style={styles.title}>Choose Vehicle Type</Text>
//       <Picker
//         selectedValue={selectedVehicle}
//         onValueChange={(itemValue) => setSelectedVehicle(itemValue)}
//         style={styles.picker}
//       >
//         {vehicleTypes.map((vehicle) => (
//           <Picker.Item key={vehicle.value} label={vehicle.label} value={vehicle.value} />
//         ))}
//       </Picker>

//       <Text style={styles.title}>Choose Reservation Time</Text>
//       <Picker
//         selectedValue={selectedTime}
//         onValueChange={(itemValue) => setSelectedTime(itemValue)}
//         style={styles.picker}
//       >
//         {timeOptions.map((time) => (
//           <Picker.Item key={time.value} label={time.label} value={time.value} />
//         ))}
//       </Picker>

//       <Text style={styles.title}>Choose Reservation Date</Text>
//       <TouchableOpacity onPress={() => setShowCalendar(true)}>
//         <Text style={styles.dateText}>
//           {selectedDate ? new Date(selectedDate).toLocaleDateString() : "Select a date"}
//         </Text>
//       </TouchableOpacity>

//       {showCalendar && (
//         <Calendar
//           onDayPress={onDayPress}
//           markedDates={{
//             [selectedDate]: {
//               selected: true,
//               selectedColor: 'blue',
//             },
//           }}
//           theme={{
//             todayTextColor: 'red',
//             selectedDayBackgroundColor: 'blue',
//             selectedDayTextColor: 'white',
//           }}
//         />
//       )}

//       <Button title="Reserve" onPress={handleReservation} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   picker: {
//     marginVertical: 10,
//   },
//   dateText: {
//     fontSize: 18,
//     color: '#007AFF',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     borderRadius: 5,
//     marginVertical: 10,
//   },
// });

// export default ReservationScreen;
// import { Picker } from '@react-native-picker/picker';
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal, Dimensions } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import { MaterialIcons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');

// const timeSlots = [
//   '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
//   '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
// ];

// function ReservationScreen({ navigation }) {
//   // Data (unchanged)
//   const parkingSpots = {
//     yerevan_mall: Array(10).fill().map((_, i) => ({
//       id: `spot_${i + 1}`,
//       name: `A${i + 1}`,
//       reserved: { 
//         car: false, 
//         bike: false,
//         vehicleType: null 
//       },
//     })),
//     cascade_complex: Array(10).fill().map((_, i) => ({
//       id: `spot_${i + 1}`,
//       name: `B${i + 1}`,
//       reserved: { 
//         car: false, 
//         bike: false,
//         vehicleType: null 
//       },
//     })),
//     north_av: Array(10).fill().map((_, i) => ({
//       id: `spot_${i + 1}`,
//       name: `C${i + 1}`,
//       reserved: { 
//         car: false, 
//         bike: false,
//         vehicleType: null 
//       },
//     }))
//   };

//   // Global reservation tracker
//   const [reservations, setReservations] = useState([]);

//   // State (unchanged)
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [selectedVehicle, setSelectedVehicle] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedSpot, setSelectedSpot] = useState(null);
//   const [spots, setSpots] = useState([]);
//   const [showSpots, setShowSpots] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);

//   const [showLocationModal, setShowLocationModal] = useState(false);
//   const [showVehicleModal, setShowVehicleModal] = useState(false);
//   const [showDateModal, setShowDateModal] = useState(false);
//   const [showTimeModal, setShowTimeModal] = useState(false);

//   // Check if all options are selected
//   const allOptionsSelected = selectedLocation && selectedVehicle && selectedDate && selectedTime;

//   // All your existing handler functions remain exactly the same
//   const onLocationChange = (location) => {
//     setSelectedLocation(location);
//     setSpots(parkingSpots[location] || []);
//     setShowLocationModal(false);
//     setSelectedSpot(null);
//   };

//   const handleReserve = () => {
//     if (!selectedSpot) {
//       Alert.alert('Error', 'Please select a parking spot first!');
//       return;
//     }

//     const isTimeReserved = reservations.some(reservation =>
//       reservation.time === selectedTime && reservation.date === selectedDate
//     );

//     if (isTimeReserved) {
//       Alert.alert('Error', 'This time slot is already reserved at another location.');
//       return;
//     }

//     const existingReservation = spots.some(spot =>
//       (spot.reserved.car || spot.reserved.bike) && spot.reserved.vehicleType === selectedVehicle
//     );

//     if (existingReservation) {
//       Alert.alert('Error', 'You have already reserved a spot. You cannot reserve another spot.');
//       return;
//     }

//     setSpots(spots.map(spot =>
//       spot.id === selectedSpot
//         ? { 
//             ...spot, 
//             reserved: { 
//               ...spot.reserved, 
//               [selectedVehicle]: true,
//               vehicleType: selectedVehicle 
//             } 
//           }
//         : spot
//     ));

//     setReservations([...reservations, { location: selectedLocation, vehicle: selectedVehicle, time: selectedTime, date: selectedDate }]);

//     setModalVisible(true);
//   };

//   const renderSpotContent = (spot) => {
//     if (spot.reserved.vehicleType === 'car') {
//       return <MaterialIcons name="directions-car" size={24} color="#d32f2f" />;
//     } else if (spot.reserved.vehicleType === 'bike') {
//       return <MaterialIcons name="directions-bike" size={24} color="#d32f2f" />;
//     }
//     return <Text style={styles.spotText}>{spot.name}</Text>;
//   };

//   const formatLocationName = (location) => {
//     return location.split('_').map(word => 
//       word.charAt(0).toUpperCase() + word.slice(1)
//     ).join(' ');
//   };

//   return (
//     <LinearGradient colors={['#f5f7fa', '#e4e8f0']} style={styles.container}>
//       {/* Header */}
//       <View style={styles.headerContainer}>
//         <Text style={styles.header}>Parking Reservation</Text>
//         <View style={styles.headerDivider} />
//       </View>
      
//       {/* Selection Buttons */}
//       <View style={styles.selectionContainer}>
//         {/* Location Picker Button */}
//         <TouchableOpacity
//           style={[styles.selectionButton, selectedLocation && styles.selectedButton]}
//           onPress={() => setShowLocationModal(true)}
//         >
//           <View style={styles.buttonContent}>
//             <MaterialIcons name="location-on" size={22} color={selectedLocation ? "#fff" : "#6e7f80"} />
//             <Text style={[styles.selectionButtonText, selectedLocation && styles.selectedButtonText]}>
//               {selectedLocation ? formatLocationName(selectedLocation) : 'Select Location'}
//             </Text>
//           </View>
//           <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedLocation ? "#fff" : "#6e7f80"} />
//         </TouchableOpacity>

//         {/* Vehicle Picker Button */}
//         <TouchableOpacity
//           style={[styles.selectionButton, selectedVehicle && styles.selectedButton]}
//           onPress={() => setShowVehicleModal(true)}
//         >
//           <View style={styles.buttonContent}>
//             <MaterialIcons 
//               name={selectedVehicle === 'car' ? 'directions-car' : 'two-wheeler'} 
//               size={22} 
//               color={selectedVehicle ? "#fff" : "#6e7f80"} 
//             />
//             <Text style={[styles.selectionButtonText, selectedVehicle && styles.selectedButtonText]}>
//               {selectedVehicle ? selectedVehicle.charAt(0).toUpperCase() + selectedVehicle.slice(1) : 'Select Vehicle'}
//             </Text>
//           </View>
//           <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedVehicle ? "#fff" : "#6e7f80"} />
//         </TouchableOpacity>

//         {/* Date Picker Button */}
//         <TouchableOpacity
//           style={[styles.selectionButton, selectedDate && styles.selectedButton]}
//           onPress={() => setShowDateModal(true)}
//         >
//           <View style={styles.buttonContent}>
//             <MaterialIcons name="calendar-today" size={22} color={selectedDate ? "#fff" : "#6e7f80"} />
//             <Text style={[styles.selectionButtonText, selectedDate && styles.selectedButtonText]}>
//               {selectedDate || 'Select Date'}
//             </Text>
//           </View>
//           <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedDate ? "#fff" : "#6e7f80"} />
//         </TouchableOpacity>

//         {/* Time Slot Picker Button */}
//         <TouchableOpacity
//           style={[styles.selectionButton, selectedTime && styles.selectedButton]}
//           onPress={() => setShowTimeModal(true)}
//         >
//           <View style={styles.buttonContent}>
//             <MaterialIcons name="access-time" size={22} color={selectedTime ? "#fff" : "#6e7f80"} />
//             <Text style={[styles.selectionButtonText, selectedTime && styles.selectedButtonText]}>
//               {selectedTime || 'Select Time'}
//             </Text>
//           </View>
//           <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedTime ? "#fff" : "#6e7f80"} />
//         </TouchableOpacity>
//       </View>

//       {/* Show Available Spots Button */}
//       {allOptionsSelected && !showSpots && (
//         <TouchableOpacity
//           style={styles.primaryButton}
//           onPress={() => setShowSpots(true)}
//         >
//           <Text style={styles.primaryButtonText}>Show Available Spots</Text>
//         </TouchableOpacity>
//       )}

//       {/* Spots Grid */}
//       {showSpots && (
//         <View style={styles.spotsSection}>
//           <Text style={styles.sectionTitle}>Available Spots</Text>
//           <View style={styles.spotsGrid}>
//             {spots.map(spot => (
//               <View key={spot.id} style={styles.spotContainer}>
//                 <TouchableOpacity
//                   style={[ 
//                     styles.spot,
//                     selectedSpot === spot.id && styles.selectedSpot,
//                     (spot.reserved.car || spot.reserved.bike) && styles.reservedSpot
//                   ]}
//                   onPress={() => {
//                     if (!spot.reserved.car && !spot.reserved.bike) {
//                       setSelectedSpot(spot.id);
//                     }
//                   }}
//                 >
//                   {renderSpotContent(spot)}
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>

//           {/* Reserve Button */}
//           {selectedSpot && (
//             <TouchableOpacity
//               style={styles.confirmButton}
//               onPress={handleReserve}
//             >
//               <Text style={styles.confirmButtonText}>Reserve Spot {selectedSpot.split('_')[1]}</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       )}

//       {/* Reservation Confirmation Modal */}
//       <Modal
//         transparent={true}
//         visible={modalVisible}
//         animationType="fade"
//         onRequestClose={() => {
//           setModalVisible(false);
//           navigation.navigate('WelcomeScreen');
//         }}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <View style={styles.successIcon}>
//               <MaterialIcons name="check-circle" size={72} color="#4BB543" />
//             </View>
//             <Text style={styles.modalTitle}>Reservation Confirmed!</Text>
            
//             <View style={styles.detailContainer}>
//               <View style={styles.detailRow}>
//                 <MaterialIcons 
//                   name={selectedVehicle === 'car' ? 'directions-car' : 'two-wheeler'} 
//                   size={28} 
//                   color="#4BB543" 
//                 />
//                 <Text style={styles.detailText}>Spot {selectedSpot?.split('_')[1]}</Text>
//               </View>
              
//               <View style={styles.detailRow}>
//                 <MaterialIcons name="location-on" size={28} color="#4BB543" />
//                 <Text style={styles.detailText}>{formatLocationName(selectedLocation)}</Text>
//               </View>
              
//               <View style={styles.detailRow}>
//                 <MaterialIcons name="calendar-today" size={28} color="#4BB543" />
//                 <Text style={styles.detailText}>{selectedDate}</Text>
//               </View>
              
//               <View style={styles.detailRow}>
//                 <MaterialIcons name="access-time" size={28} color="#4BB543" />
//                 <Text style={styles.detailText}>{selectedTime}</Text>
//               </View>
//             </View>

//             <TouchableOpacity
//               style={styles.modalCloseButton}
//               onPress={() => {
//                 setModalVisible(false);
//                 navigation.navigate('WelcomeScreen');
//               }}
//             >
//               <Text style={styles.modalCloseButtonText}>Return to Home</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Location Selection Modal */}
//       <Modal
//         transparent={true}
//         visible={showLocationModal}
//         animationType="fade"
//         onRequestClose={() => setShowLocationModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.pickerModalContent}>
//             <Text style={styles.pickerModalTitle}>Select Location</Text>
//             {Object.keys(parkingSpots).map(location => (
//               <TouchableOpacity
//                 key={location}
//                 onPress={() => onLocationChange(location)}
//                 style={styles.pickerItem}
//               >
//                 <MaterialIcons name="location-on" size={24} color="#4a6fa5" />
//                 <Text style={styles.pickerItemText}>{formatLocationName(location)}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity
//               style={styles.pickerModalCloseButton}
//               onPress={() => setShowLocationModal(false)}
//             >
//               <Text style={styles.pickerModalCloseButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Vehicle Type Modal */}
//       <Modal
//         transparent={true}
//         visible={showVehicleModal}
//         animationType="fade"
//         onRequestClose={() => setShowVehicleModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.pickerModalContent}>
//             <Text style={styles.pickerModalTitle}>Select Vehicle Type</Text>
//             <TouchableOpacity
//               onPress={() => {
//                 setSelectedVehicle('car');
//                 setShowVehicleModal(false);
//               }}
//               style={styles.pickerItem}
//             >
//               <MaterialIcons name="directions-car" size={24} color="#4a6fa5" />
//               <Text style={styles.pickerItemText}>Car</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => {
//                 setSelectedVehicle('bike');
//                 setShowVehicleModal(false);
//               }}
//               style={styles.pickerItem}
//             >
//               <MaterialIcons name="two-wheeler" size={24} color="#4a6fa5" />
//               <Text style={styles.pickerItemText}>Bike</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.pickerModalCloseButton}
//               onPress={() => setShowVehicleModal(false)}
//             >
//               <Text style={styles.pickerModalCloseButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Date Picker Modal */}
//       <Modal
//         transparent={true}
//         visible={showDateModal}
//         animationType="fade"
//         onRequestClose={() => setShowDateModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.pickerModalContent}>
//             <Text style={styles.pickerModalTitle}>Select Date</Text>
//             <Calendar
//               onDayPress={(day) => {
//                 setSelectedDate(day.dateString);
//                 setShowDateModal(false);
//               }}
//               style={styles.calendar}
//               theme={{
//                 backgroundColor: '#ffffff',
//                 calendarBackground: '#ffffff',
//                 selectedDayBackgroundColor: '#4a6fa5',
//                 selectedDayTextColor: '#ffffff',
//                 todayTextColor: '#4a6fa5',
//                 dayTextColor: '#2d4150',
//                 textDisabledColor: '#d9e1e8',
//                 dotColor: '#4a6fa5',
//                 selectedDotColor: '#ffffff',
//                 arrowColor: '#4a6fa5',
//                 monthTextColor: '#4a6fa5',
//                 textDayFontWeight: '400',
//                 textMonthFontWeight: '600',
//                 textDayHeaderFontWeight: '500',
//                 textDayFontSize: 16,
//                 textMonthFontSize: 18,
//                 textDayHeaderFontSize: 14
//               }}
//             />
//             <TouchableOpacity
//               style={styles.pickerModalCloseButton}
//               onPress={() => setShowDateModal(false)}
//             >
//               <Text style={styles.pickerModalCloseButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* Time Slot Modal */}
//       <Modal
//         transparent={true}
//         visible={showTimeModal}
//         animationType="fade"
//         onRequestClose={() => setShowTimeModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.pickerModalContent}>
//             <Text style={styles.pickerModalTitle}>Select Time Slot</Text>
//             <View style={styles.timeSlotsContainer}>
//               {timeSlots.map(time => (
//                 <TouchableOpacity
//                   key={time}
//                   onPress={() => {
//                     setSelectedTime(time);
//                     setShowTimeModal(false);
//                   }}
//                   style={[styles.timeSlot, selectedTime === time && styles.selectedTimeSlot]}
//                 >
//                   <Text style={[styles.timeSlotText, selectedTime === time && styles.selectedTimeSlotText]}>
//                     {time}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//             <TouchableOpacity
//               style={styles.pickerModalCloseButton}
//               onPress={() => setShowTimeModal(false)}
//             >
//               <Text style={styles.pickerModalCloseButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </LinearGradient>
//   );
// }

// // Modernized Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 25,
//   },
//   headerContainer: {
//     marginBottom: 30,
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: '#2c3e50',
//     marginBottom: 10,
//   },
//   headerDivider: {
//     width: 50,
//     height: 4,
//     backgroundColor: '#4a6fa5',
//     borderRadius: 2,
//   },
//   selectionContainer: {
//     marginBottom: 20,
//   },
//   selectionButton: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 12,
//     marginVertical: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: '#e0e6ed',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 6,
//     elevation: 2,
//   },
//   selectedButton: {
//     backgroundColor: '#4a6fa5',
//     borderColor: '#4a6fa5',
//   },
//   selectionButtonText: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#6e7f80',
//     marginLeft: 10,
//   },
//   selectedButtonText: {
//     color: '#fff',
//   },
//   buttonContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#4a6fa5',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//     shadowColor: '#4a6fa5',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   primaryButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   confirmButton: {
//     backgroundColor: '#4BB543',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     shadowColor: '#4BB543',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 3,
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   spotsSection: {
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#2c3e50',
//     marginBottom: 15,
//   },
//   spotsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   spotContainer: {
//     width: '18%',
//     marginBottom: 12,
//     aspectRatio: 1,
//   },
//   spot: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100%',
//     borderWidth: 1,
//     borderColor: '#e0e6ed',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 1,
//   },
//   spotText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#4a6fa5',
//   },
//   reservedSpot: {
//     backgroundColor: '#ffebee',
//     borderColor: '#ef9a9a',
//   },
//   selectedSpot: {
//     backgroundColor: '#e3f2fd',
//     borderColor: '#4a6fa5',
//     borderWidth: 2,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 30,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   pickerModalContent: {
//     width: '90%',
//     maxWidth: 400,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   modalTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginBottom: 20,
//     textAlign: 'center',
//     color: '#2c3e50',
//   },
//   pickerModalTitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 15,
//     textAlign: 'center',
//     color: '#2c3e50',
//   },
//   successIcon: {
//     marginBottom: 20,
//   },
//   detailContainer: {
//     width: '100%',
//     marginVertical: 15,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//   },
//   detailText: {
//     fontSize: 16,
//     color: '#555',
//     marginLeft: 10,
//     fontWeight: '500',
//   },
//   modalCloseButton: {
//     width: '100%',
//     padding: 16,
//     borderRadius: 12,
//     backgroundColor: '#4a6fa5',
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   modalCloseButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   pickerModalCloseButton: {
//     width: '100%',
//     padding: 14,
//     borderRadius: 10,
//     backgroundColor: '#f8f9fa',
//     alignItems: 'center',
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#e0e6ed',
//   },
//   pickerModalCloseButtonText: {
//     color: '#6e7f80',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   pickerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 8,
//     backgroundColor: '#f8f9fa',
//   },
//   pickerItemText: {
//     fontSize: 16,
//     color: '#2c3e50',
//     marginLeft: 10,
//     fontWeight: '500',
//   },
//   calendar: {
//     width: '100%',
//     borderRadius: 15,
//     marginBottom: 15,
//     overflow: 'hidden',
//   },
//   timeSlotsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   timeSlot: {
//     width: '30%',
//     padding: 12,
//     marginBottom: 10,
//     borderRadius: 10,
//     backgroundColor: '#f8f9fa',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#e0e6ed',
//   },
//   selectedTimeSlot: {
//     backgroundColor: '#4a6fa5',
//     borderColor: '#4a6fa5',
//   },
//   timeSlotText: {
//     fontSize: 14,
//     color: '#6e7f80',
//     fontWeight: '500',
//   },
//   selectedTimeSlotText: {
//     color: '#fff',
//     fontWeight: '600',
//   },
// });

// export default ReservationScreen;


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal, Dimensions, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const timeSlots = [
  '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
];

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: 'credit-card' },
  { id: 'paypal', name: 'PayPal', icon: 'paypal' },
  { id: 'applepay', name: 'Apple Pay', icon: 'apple' },
];

function ReservationScreen({ navigation }) {
  // Parking spots data
  const parkingSpots = {
    yerevan_mall: Array(10).fill().map((_, i) => ({
      id: `spot_${i + 1}`,
      name: `A${i + 1}`,
      reserved: { 
        car: false, 
        bike: false,
        vehicleType: null 
      },
    })),
    cascade_complex: Array(10).fill().map((_, i) => ({
      id: `spot_${i + 1}`,
      name: `B${i + 1}`,
      reserved: { 
        car: false, 
        bike: false,
        vehicleType: null 
      },
    })),
    north_av: Array(10).fill().map((_, i) => ({
      id: `spot_${i + 1}`,
      name: `C${i + 1}`,
      reserved: { 
        car: false, 
        bike: false,
        vehicleType: null 
      },
    }))
  };

  // State management
  const [reservations, setReservations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [spots, setSpots] = useState([]);
  const [showSpots, setShowSpots] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  // Modal visibility states
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  // Check if all required options are selected
  const allOptionsSelected = selectedLocation && selectedVehicle && selectedDate && selectedTime;

  // Calculate price based on vehicle type
  const calculatePrice = () => {
    return selectedVehicle === 'car' ? 5 : 3; // $5 for cars, $3 for bikes
  };

  // Handle location selection
  const onLocationChange = (location) => {
    setSelectedLocation(location);
    setSpots(parkingSpots[location] || []);
    setShowLocationModal(false);
    setSelectedSpot(null);
    setShowSpots(false);
    setShowPayment(false);
  };

  // Format location name for display
  const formatLocationName = (location) => {
    return location.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Render spot content with appropriate icon
  const renderSpotContent = (spot) => {
    if (spot.reserved.vehicleType === 'car') {
      return <MaterialIcons name="directions-car" size={24} color="#d32f2f" />;
    } else if (spot.reserved.vehicleType === 'bike') {
      return <MaterialIcons name="directions-bike" size={24} color="#d32f2f" />;
    }
    return <Text style={styles.spotText}>{spot.name}</Text>;
  };

  // Handle reservation initiation
  const handleReserve = () => {
    if (!selectedSpot) {
      Alert.alert('Error', 'Please select a parking spot first!');
      return;
    }

    const isTimeReserved = reservations.some(reservation =>
      reservation.time === selectedTime && reservation.date === selectedDate
    );

    if (isTimeReserved) {
      Alert.alert('Error', 'This time slot is already reserved at another location.');
      return;
    }

    const existingReservation = spots.some(spot =>
      (spot.reserved.car || spot.reserved.bike) && spot.reserved.vehicleType === selectedVehicle
    );

    if (existingReservation) {
      Alert.alert('Error', 'You have already reserved a spot. You cannot reserve another spot.');
      return;
    }

    // Proceed to payment
    setShowPayment(true);
  };

  // Handle payment submission
  const handlePayment = () => {
    if (!paymentMethod) {
      Alert.alert('Error', 'Please select a payment method');
      return;
    }

    if (paymentMethod === 'card' && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name)) {
      Alert.alert('Error', 'Please fill in all card details');
      return;
    }

    // Mark the spot as reserved
    setSpots(spots.map(spot =>
      spot.id === selectedSpot
        ? { 
            ...spot, 
            reserved: { 
              ...spot.reserved, 
              [selectedVehicle]: true,
              vehicleType: selectedVehicle 
            } 
          }
        : spot
    ));

    // Add to reservations
    setReservations([...reservations, { 
      location: selectedLocation, 
      vehicle: selectedVehicle, 
      time: selectedTime, 
      date: selectedDate,
      paymentMethod,
      amount: calculatePrice(),
      spot: selectedSpot.split('_')[1]
    }]);

    // Show confirmation
    setModalVisible(true);
    setShowPayment(false);
  };

  return (
    <LinearGradient colors={['#f5f7fa', '#e4e8f0']} style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Parking Reservation</Text>
        <View style={styles.headerDivider} />
      </View>
      
      {/* Selection Buttons */}
      <View style={styles.selectionContainer}>
        {/* Location Selection */}
        <TouchableOpacity
          style={[styles.selectionButton, selectedLocation && styles.selectedButton]}
          onPress={() => setShowLocationModal(true)}
        >
          <View style={styles.buttonContent}>
            <MaterialIcons name="location-on" size={22} color={selectedLocation ? "#fff" : "#6e7f80"} />
            <Text style={[styles.selectionButtonText, selectedLocation && styles.selectedButtonText]}>
              {selectedLocation ? formatLocationName(selectedLocation) : 'Select Location'}
            </Text>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedLocation ? "#fff" : "#6e7f80"} />
        </TouchableOpacity>

        {/* Vehicle Selection */}
        <TouchableOpacity
          style={[styles.selectionButton, selectedVehicle && styles.selectedButton]}
          onPress={() => setShowVehicleModal(true)}
        >
          <View style={styles.buttonContent}>
            <MaterialIcons 
              name={selectedVehicle === 'car' ? 'directions-car' : 'two-wheeler'} 
              size={22} 
              color={selectedVehicle ? "#fff" : "#6e7f80"} 
            />
            <Text style={[styles.selectionButtonText, selectedVehicle && styles.selectedButtonText]}>
              {selectedVehicle ? selectedVehicle.charAt(0).toUpperCase() + selectedVehicle.slice(1) : 'Select Vehicle'}
            </Text>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedVehicle ? "#fff" : "#6e7f80"} />
        </TouchableOpacity>

        {/* Date Selection */}
        <TouchableOpacity
          style={[styles.selectionButton, selectedDate && styles.selectedButton]}
          onPress={() => setShowDateModal(true)}
        >
          <View style={styles.buttonContent}>
            <MaterialIcons name="calendar-today" size={22} color={selectedDate ? "#fff" : "#6e7f80"} />
            <Text style={[styles.selectionButtonText, selectedDate && styles.selectedButtonText]}>
              {selectedDate || 'Select Date'}
            </Text>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedDate ? "#fff" : "#6e7f80"} />
        </TouchableOpacity>

        {/* Time Selection */}
        <TouchableOpacity
          style={[styles.selectionButton, selectedTime && styles.selectedButton]}
          onPress={() => setShowTimeModal(true)}
        >
          <View style={styles.buttonContent}>
            <MaterialIcons name="access-time" size={22} color={selectedTime ? "#fff" : "#6e7f80"} />
            <Text style={[styles.selectionButtonText, selectedTime && styles.selectedButtonText]}>
              {selectedTime || 'Select Time'}
            </Text>
          </View>
          <MaterialIcons name="keyboard-arrow-down" size={22} color={selectedTime ? "#fff" : "#6e7f80"} />
        </TouchableOpacity>
      </View>

      {/* Show Available Spots Button */}
      {allOptionsSelected && !showSpots && !showPayment && (
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => setShowSpots(true)}
        >
          <Text style={styles.primaryButtonText}>Show Available Spots</Text>
        </TouchableOpacity>
      )}

      {/* Parking Spots Grid */}
      {showSpots && !showPayment && (
        <View style={styles.spotsSection}>
          <Text style={styles.sectionTitle}>Available Spots</Text>
          <View style={styles.spotsGrid}>
            {spots.map(spot => (
              <View key={spot.id} style={styles.spotContainer}>
                <TouchableOpacity
                  style={[ 
                    styles.spot,
                    selectedSpot === spot.id && styles.selectedSpot,
                    (spot.reserved.car || spot.reserved.bike) && styles.reservedSpot
                  ]}
                  onPress={() => {
                    if (!spot.reserved.car && !spot.reserved.bike) {
                      setSelectedSpot(spot.id);
                    }
                  }}
                >
                  {renderSpotContent(spot)}
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Reserve Button */}
          {selectedSpot && (
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleReserve}
            >
              <Text style={styles.confirmButtonText}>Reserve Spot {selectedSpot.split('_')[1]}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Payment Section */}
      {showPayment && (
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Payment Details</Text>
          
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Total Amount:</Text>
            <Text style={styles.priceValue}>${calculatePrice()}</Text>
          </View>

          <Text style={styles.subSectionTitle}>Select Payment Method</Text>
          
          <View style={styles.paymentMethodsContainer}>
            {paymentMethods.map(method => (
              <TouchableOpacity
                key={method.id}
                style={[
                  styles.paymentMethod,
                  paymentMethod === method.id && styles.selectedPaymentMethod
                ]}
                onPress={() => setPaymentMethod(method.id)}
              >
                <FontAwesome 
                  name={method.icon} 
                  size={24} 
                  color={paymentMethod === method.id ? '#fff' : '#4a6fa5'} 
                />
                <Text style={[
                  styles.paymentMethodText,
                  paymentMethod === method.id && styles.selectedPaymentMethodText
                ]}>
                  {method.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <View style={styles.cardForm}>
              <Text style={styles.subSectionTitle}>Card Details</Text>
              
              <View style={styles.inputContainer}>
                <MaterialIcons name="credit-card" size={20} color="#6e7f80" />
                <TextInput
                  style={styles.input}
                  placeholder="Card Number"
                  keyboardType="numeric"
                  value={cardDetails.number}
                  onChangeText={(text) => setCardDetails({...cardDetails, number: text})}
                  placeholderTextColor="#9e9e9e"
                />
              </View>
              
              <View style={styles.rowInputs}>
                <View style={[styles.inputContainer, {flex: 1, marginRight: 10}]}>
                  <MaterialIcons name="date-range" size={20} color="#6e7f80" />
                  <TextInput
                    style={styles.input}
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChangeText={(text) => setCardDetails({...cardDetails, expiry: text})}
                    placeholderTextColor="#9e9e9e"
                  />
                </View>
                
                <View style={[styles.inputContainer, {flex: 1}]}>
                  <MaterialIcons name="lock" size={20} color="#6e7f80" />
                  <TextInput
                    style={styles.input}
                    placeholder="CVV"
                    keyboardType="numeric"
                    secureTextEntry
                    value={cardDetails.cvv}
                    onChangeText={(text) => setCardDetails({...cardDetails, cvv: text})}
                    placeholderTextColor="#9e9e9e"
                  />
                </View>
              </View>
              
              <View style={styles.inputContainer}>
                <MaterialIcons name="person" size={20} color="#6e7f80" />
                <TextInput
                  style={styles.input}
                  placeholder="Cardholder Name"
                  value={cardDetails.name}
                  onChangeText={(text) => setCardDetails({...cardDetails, name: text})}
                  placeholderTextColor="#9e9e9e"
                />
              </View>
            </View>
          )}

          {/* Payment Action Buttons */}
          <View style={styles.paymentButtons}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setShowPayment(false)}
            >
              <Text style={styles.secondaryButtonText}>Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handlePayment}
            >
              <Text style={styles.confirmButtonText}>Pay ${calculatePrice()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Reservation Confirmation Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => {
          setModalVisible(false);
          navigation.navigate('WelcomeScreen');
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.successIcon}>
              <MaterialIcons name="check-circle" size={72} color="#4BB543" />
            </View>
            <Text style={styles.modalTitle}>Payment Successful!</Text>
            
            <View style={styles.detailContainer}>
              <View style={styles.detailRow}>
                <MaterialIcons 
                  name={selectedVehicle === 'car' ? 'directions-car' : 'two-wheeler'} 
                  size={28} 
                  color="#4BB543" 
                />
                <Text style={styles.detailText}>Spot {selectedSpot?.split('_')[1]}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <MaterialIcons name="location-on" size={28} color="#4BB543" />
                <Text style={styles.detailText}>{formatLocationName(selectedLocation)}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <MaterialIcons name="calendar-today" size={28} color="#4BB543" />
                <Text style={styles.detailText}>{selectedDate}</Text>
              </View>
              
              <View style={styles.detailRow}>
                <MaterialIcons name="access-time" size={28} color="#4BB543" />
                <Text style={styles.detailText}>{selectedTime}</Text>
              </View>

              <View style={styles.detailRow}>
                <MaterialIcons 
                  name={paymentMethod === 'card' ? 'credit-card' : 
                        paymentMethod === 'paypal' ? 'paypal' : 'apple'} 
                  size={28} 
                  color="#4BB543" 
                />
                <Text style={styles.detailText}>
                  {paymentMethods.find(m => m.id === paymentMethod)?.name || 'Payment'}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <MaterialIcons name="attach-money" size={28} color="#4BB543" />
                <Text style={[styles.detailText, {fontWeight: 'bold'}]}>
                  ${calculatePrice()}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('WelcomeScreen');
              }}
            >
              <Text style={styles.modalCloseButtonText}>Return to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Location Selection Modal */}
      <Modal
        transparent={true}
        visible={showLocationModal}
        animationType="fade"
        onRequestClose={() => setShowLocationModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pickerModalContent}>
            <Text style={styles.pickerModalTitle}>Select Location</Text>
            {Object.keys(parkingSpots).map(location => (
              <TouchableOpacity
                key={location}
                onPress={() => onLocationChange(location)}
                style={styles.pickerItem}
              >
                <MaterialIcons name="location-on" size={24} color="#4a6fa5" />
                <Text style={styles.pickerItemText}>{formatLocationName(location)}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.pickerModalCloseButton}
              onPress={() => setShowLocationModal(false)}
            >
              <Text style={styles.pickerModalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Vehicle Type Modal */}
      <Modal
        transparent={true}
        visible={showVehicleModal}
        animationType="fade"
        onRequestClose={() => setShowVehicleModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pickerModalContent}>
            <Text style={styles.pickerModalTitle}>Select Vehicle Type</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedVehicle('car');
                setShowVehicleModal(false);
              }}
              style={styles.pickerItem}
            >
              <MaterialIcons name="directions-car" size={24} color="#4a6fa5" />
              <Text style={styles.pickerItemText}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedVehicle('bike');
                setShowVehicleModal(false);
              }}
              style={styles.pickerItem}
            >
              <MaterialIcons name="two-wheeler" size={24} color="#4a6fa5" />
              <Text style={styles.pickerItemText}>Bike</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.pickerModalCloseButton}
              onPress={() => setShowVehicleModal(false)}
            >
              <Text style={styles.pickerModalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Date Picker Modal */}
      <Modal
        transparent={true}
        visible={showDateModal}
        animationType="fade"
        onRequestClose={() => setShowDateModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pickerModalContent}>
            <Text style={styles.pickerModalTitle}>Select Date</Text>
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
                setShowDateModal(false);
              }}
              style={styles.calendar}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                selectedDayBackgroundColor: '#4a6fa5',
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#4a6fa5',
                dayTextColor: '#2d4150',
                textDisabledColor: '#d9e1e8',
                dotColor: '#4a6fa5',
                selectedDotColor: '#ffffff',
                arrowColor: '#4a6fa5',
                monthTextColor: '#4a6fa5',
                textDayFontWeight: '400',
                textMonthFontWeight: '600',
                textDayHeaderFontWeight: '500',
                textDayFontSize: 16,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 14
              }}
            />
            <TouchableOpacity
              style={styles.pickerModalCloseButton}
              onPress={() => setShowDateModal(false)}
            >
              <Text style={styles.pickerModalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Time Slot Modal */}
      <Modal
        transparent={true}
        visible={showTimeModal}
        animationType="fade"
        onRequestClose={() => setShowTimeModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pickerModalContent}>
            <Text style={styles.pickerModalTitle}>Select Time Slot</Text>
            <View style={styles.timeSlotsContainer}>
              {timeSlots.map(time => (
                <TouchableOpacity
                  key={time}
                  onPress={() => {
                    setSelectedTime(time);
                    setShowTimeModal(false);
                  }}
                  style={[styles.timeSlot, selectedTime === time && styles.selectedTimeSlot]}
                >
                  <Text style={[styles.timeSlotText, selectedTime === time && styles.selectedTimeSlotText]}>
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={styles.pickerModalCloseButton}
              onPress={() => setShowTimeModal(false)}
            >
              <Text style={styles.pickerModalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  headerContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  headerDivider: {
    width: 50,
    height: 4,
    backgroundColor: '#4a6fa5',
    borderRadius: 2,
  },
  selectionContainer: {
    marginBottom: 20,
  },
  selectionButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e6ed',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  selectedButton: {
    backgroundColor: '#4a6fa5',
    borderColor: '#4a6fa5',
  },
  selectionButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6e7f80',
    marginLeft: 10,
  },
  selectedButtonText: {
    color: '#fff',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4a6fa5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#4a6fa5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#4BB543',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#4BB543',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  spotsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
  },
  spotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  spotContainer: {
    width: '18%',
    marginBottom: 12,
    aspectRatio: 1,
  },
  spot: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderWidth: 1,
    borderColor: '#e0e6ed',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  spotText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4a6fa5',
  },
  reservedSpot: {
    backgroundColor: '#ffebee',
    borderColor: '#ef9a9a',
  },
  selectedSpot: {
    backgroundColor: '#e3f2fd',
    borderColor: '#4a6fa5',
    borderWidth: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  pickerModalContent: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  pickerModalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#2c3e50',
  },
  successIcon: {
    marginBottom: 20,
  },
  detailContainer: {
    width: '100%',
    marginVertical: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
    marginLeft: 10,
    fontWeight: '500',
  },
  modalCloseButton: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#4a6fa5',
    alignItems: 'center',
    marginTop: 15,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  pickerModalCloseButton: {
    width: '100%',
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#e0e6ed',
  },
  pickerModalCloseButtonText: {
    color: '#6e7f80',
    fontSize: 16,
    fontWeight: '500',
  },
  pickerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: '#f8f9fa',
  },
  pickerItemText: {
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 10,
    fontWeight: '500',
  },
  calendar: {
    width: '100%',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  timeSlot: {
    width: '30%',
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e6ed',
  },
  selectedTimeSlot: {
    backgroundColor: '#4a6fa5',
    borderColor: '#4a6fa5',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#6e7f80',
    fontWeight: '500',
  },
  selectedTimeSlotText: {
    color: '#fff',
    fontWeight: '600',
  },
  paymentSection: {
    marginTop: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  priceLabel: {
    fontSize: 16,
    color: '#6e7f80',
    fontWeight: '500',
  },
  priceValue: {
    fontSize: 20,
    color: '#4a6fa5',
    fontWeight: '700',
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 15,
    marginTop: 10,
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  paymentMethod: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e6ed',
    flexDirection: 'row',
  },
  selectedPaymentMethod: {
    backgroundColor: '#4a6fa5',
    borderColor: '#4a6fa5',
  },
  paymentMethodText: {
    fontSize: 14,
    color: '#6e7f80',
    marginLeft: 8,
    fontWeight: '500',
  },
  selectedPaymentMethodText: {
    color: '#fff',
  },
  cardForm: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2c3e50',
    marginLeft: 10,
  },
  rowInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondaryButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e0e6ed',
  },
  secondaryButtonText: {
    color: '#6e7f80',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReservationScreen;