import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Animated, { cubicBezier } from "react-native-reanimated";

const startFactory = (x: number, y: number, rotate: number, scale: number) => ({
  "60%": {
    transform: [{ scale }],
  },
  from: {
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotateZ: `-${rotate}deg` }, { scale: 0.3 }],
  },
  to: {
    opacity: 1,
    transform: [{ translateX: x }, { translateY: y }, { rotateZ: `${rotate}deg` }, { scale: 0 }],
  },
});

export default function App() {
  return (
    <Animated.View style={styles.container}>
      <View>
        <MaskedView
          style={styles.mask}
          maskElement={<Animated.Text style={styles.label}>Reanimated</Animated.Text>}
        >
          <Animated.View
            style={[
              styles.gradientContainer,
              {
                animationName: {
                  from: {
                    transform: [{ translateX: "-25%" }],
                  },
                  to: {
                    transform: [{ translateX: "25%" }],
                  },
                },
                animationDuration: "3s",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
              },
            ]}
          >
            <LinearGradient
              colors={["#422006", "#facc15", "#422006"]}
              locations={[0.46, 0.5, 0.54]}
              start={{ x: 0, y: -3 }}
              end={{ x: 1, y: 3 }}
              style={styles.gradient}
            />
          </Animated.View>
        </MaskedView>
      </View>
      <View style={styles.starWrapper}>
        <Animated.Text
          style={[
            styles.star,
            styles.star1,
            {
              animationDelay: "0.1s",
              animationDuration: "2.1s",
              animationFillMode: "forwards",
              animationName: startFactory(-5, 8, 20, 1.1),
              animationTimingFunction: cubicBezier(0.42, 0, 0.58, 1),
              animationIterationCount: "infinite",
            },
          ]}
        >
          ✦
        </Animated.Text>
        <Animated.Text
          style={[
            styles.star,
            styles.star2,
            {
              animationDuration: "2.8s",
              animationFillMode: "forwards",
              animationName: startFactory(-8, -8, 10, 1.2),
              animationTimingFunction: "easeIn",
              animationIterationCount: "infinite",
            },
          ]}
        >
          ✦
        </Animated.Text>
        <Animated.Text
          style={[
            styles.star,
            styles.star3,
            {
              animationDelay: "0.2s",
              animationDuration: "2.4s",
              animationFillMode: "forwards",
              animationName: startFactory(5, 8, 30, 0.8),
              animationTimingFunction: "easeIn",
              animationIterationCount: "infinite",
            },
          ]}
        >
          ✦
        </Animated.Text>
        <Animated.Text
          style={[
            styles.star,
            styles.star4,
            {
              animationDuration: "2.2s",
              animationFillMode: "forwards",
              animationName: startFactory(10, -5, 40, 1.3),
              animationTimingFunction: "easeIn",
              animationIterationCount: "infinite",
            },
          ]}
        >
          ✦
        </Animated.Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f8fafc",
    flex: 1,
    paddingTop: 100,
  },
  shimmerContainer: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  mask: {
    height: 60,
    width: 235,
  },
  gradientContainer: {
    flex: 1,
    width: "300%",
    marginHorizontal: "-100%",
  },
  gradient: {
    flex: 1,
    width: "100%",
  },
  label: {
    color: "#422006",
    fontSize: 42,
    fontWeight: "bold",
  },
  star: {
    color: "#facc15",
    opacity: 0,
    position: "relative",
  },
  star1: {
    bottom: -20,
    fontSize: 32,
    left: -110,
  },
  star2: {
    fontSize: 26,
    left: -130,
    top: -10,
  },
  star3: {
    bottom: 20,
    fontSize: 30,
    right: -130,
    top: 15,
  },
  star4: {
    bottom: 18,
    fontSize: 28,
    right: -105,
  },
  starWrapper: {
    flexDirection: "row",
    position: "absolute",
    top: 110,
  },
});
